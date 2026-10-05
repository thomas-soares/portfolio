const GITHUB_API_VERSION = "2022-11-28";
const GITHUB_USERNAME = process.env.GITHUB_USERNAME ?? "thomas-soares";

type GitHubCommitSearchResponse = {
  items?: Array<{
    sha: string;
    html_url: string;
    commit: {
      message: string;
      author?: { date?: string } | null;
    };
    repository: { name: string; full_name: string };
  }>;
};

type GitHubPinnedRepositoriesResponse = {
  data?: {
    user?: {
      pinnedItems?: {
        nodes?: Array<{
          id: string;
          name: string;
          description: string | null;
          url: string;
          stargazerCount: number;
          primaryLanguage: { name: string; color: string } | null;
        } | null>;
      };
    } | null;
  };
  errors?: Array<{ message: string }>;
};

export type GitHubCommit = {
  id: string;
  message: string;
  repositoryName: string;
  repositoryUrl: string;
  url: string;
  date: string;
};

export type GitHubRepository = {
  id: string;
  name: string;
  description: string | null;
  url: string;
  stars: number;
  language: { name: string; color: string } | null;
};

export type GitHubRecentRepository = {
  name: string;
  url: string;
  latestCommitDate: string;
  commitCount: number;
};

export type GitHubData = {
  commits: GitHubCommit[];
  recentRepositories: GitHubRecentRepository[];
  repositories: GitHubRepository[];
};

const githubHeaders = {
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": GITHUB_API_VERSION,
  ...(process.env.GITHUB_TOKEN
    ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
    : {}),
};

async function getRecentCommits(): Promise<GitHubCommit[]> {
  const query = encodeURIComponent(`author:${GITHUB_USERNAME}`);
  const response = await fetch(
    `https://api.github.com/search/commits?q=${query}&sort=committer-date&order=desc&per_page=100`,
    {
      headers: githubHeaders,
      cache: "no-store",
    },
  );

  if (!response.ok) {
    return [];
  }

  const data = (await response.json()) as GitHubCommitSearchResponse;

  return (data.items ?? []).flatMap((commit) => {
    const date = commit.commit.author?.date;

    if (!date) {
      return [];
    }

    return [
      {
        id: commit.sha,
        message: commit.commit.message.split("\n")[0],
        repositoryName: commit.repository.name,
        repositoryUrl: `https://github.com/${commit.repository.full_name}`,
        url: commit.html_url,
        date,
      },
    ];
  });
}

async function getPinnedRepositories(): Promise<GitHubRepository[]> {
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: { ...githubHeaders, "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query PinnedRepositories($login: String!) {
          user(login: $login) {
            pinnedItems(first: 6, types: REPOSITORY) {
              nodes {
                ... on Repository {
                  id
                  name
                  description
                  url
                  stargazerCount
                  primaryLanguage { name color }
                }
              }
            }
          }
        }
      `,
      variables: { login: GITHUB_USERNAME },
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    return [];
  }

  const data = (await response.json()) as GitHubPinnedRepositoriesResponse;

  if (data.errors?.length || !data.data?.user?.pinnedItems?.nodes) {
    return [];
  }

  return data.data.user.pinnedItems.nodes.flatMap((repository) => {
    if (!repository) {
      return [];
    }

    return [
      {
        id: repository.id,
        name: repository.name,
        description: repository.description,
        url: repository.url,
        stars: repository.stargazerCount,
        language: repository.primaryLanguage,
      },
    ];
  });
}

export async function getGitHubData(): Promise<GitHubData> {
  const [commits, repositories] = await Promise.all([
    getRecentCommits().catch(() => []),
    getPinnedRepositories().catch(() => []),
  ]);

  const recentRepositories = commits.reduce<GitHubRecentRepository[]>(
    (items, commit) => {
      if (items.length >= 6 && !items.some((item) => item.url === commit.repositoryUrl)) {
        return items;
      }

      const existingRepository = items.find(
        (repository) => repository.url === commit.repositoryUrl,
      );

      if (existingRepository) {
        existingRepository.commitCount += 1;
        return items;
      }

      items.push({
        name: commit.repositoryName,
        url: commit.repositoryUrl,
        latestCommitDate: commit.date,
        commitCount: 1,
      });

      return items;
    },
    [],
  );

  return { commits, recentRepositories, repositories };
}

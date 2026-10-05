import { ExternalLink, Github } from "lucide-react";
import { RecentCommits } from "@/components/github/recent-commits";
import { RecentRepositories } from "@/components/github/recent-repositories";
import { PinnedRepositories } from "@/components/github/pinned-repositories";
import type { GitHubData } from "@/lib/github";

type GitHubLabels = {
  title: string;
  description: string;
  commitsTitle: string;
  recentRepositoriesTitle: string;
  repositoriesTitle: string;
  empty: string;
  viewOnGitHub: string;
  stars: string;
};

type GitHubSectionProps = {
  data: GitHubData;
  labels: GitHubLabels;
  locale: string;
};

export function GitHubSection({
  data,
  labels,
  locale,
}: GitHubSectionProps) {
  return (
    <section
      aria-labelledby="github-title"
      className="space-y-6 rounded-4xl border border-(--border) bg-(--surface)/95 p-8 shadow-2xl shadow-(color:--shadow-strong) backdrop-blur-xl"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="mb-3 flex items-center gap-3 text-(--primary)">
            <Github aria-hidden="true" className="size-5" />
            <span className="text-sm font-semibold uppercase tracking-[0.2em]">
              GitHub
            </span>
          </div>
          <h2 id="github-title" className="text-2xl font-semibold tracking-tight">
            {labels.title}
          </h2>
          <p className="mt-2 text-sm text-(--muted)">{labels.description}</p>
        </div>
        <a
          href="https://github.com/thomas-soares"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 self-start text-sm font-semibold text-(--primary) transition-colors hover:text-(--primary-hover) sm:self-auto"
        >
          {labels.viewOnGitHub}
          <ExternalLink aria-hidden="true" className="size-4" />
        </a>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <RecentCommits
          commits={data.commits}
          emptyLabel={labels.empty}
          locale={locale}
          title={labels.commitsTitle}
        />
        <RecentRepositories
          emptyLabel={labels.empty}
          locale={locale}
          repositories={data.recentRepositories}
          title={labels.recentRepositoriesTitle}
        />
        <PinnedRepositories
          emptyLabel={labels.empty}
          repositories={data.repositories}
          starsLabel={labels.stars}
          title={labels.repositoriesTitle}
        />
      </div>
    </section>
  );
}

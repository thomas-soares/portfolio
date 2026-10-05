import { GitCommitHorizontal } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { GitHubCommit } from "@/lib/github";

type RecentCommitsProps = {
  commits: GitHubCommit[];
  emptyLabel: string;
  locale: string;
  title: string;
};

function formatDate(date: string, locale: string) {
  return new Intl.DateTimeFormat(locale, { dateStyle: "medium" }).format(
    new Date(date),
  );
}

function getCommitMessage(message: string) {
  return message.length > 72 ? `${message.slice(0, 69)}...` : message;
}

export function RecentCommits({
  commits,
  emptyLabel,
  locale,
  title,
}: RecentCommitsProps) {
  const visibleCommits = commits.slice(0, 5);

  return (
    <Card className="border-(--border) bg-(--surface) text-foreground shadow-xl shadow-(color:--shadow-medium)">
      <CardHeader>
        <div className="flex items-center gap-3">
          <GitCommitHorizontal
            aria-hidden="true"
            className="size-5 text-(--primary-glow)"
          />
          <CardTitle className="text-xl">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        {visibleCommits.length ? (
          <div className="space-y-4">
            {visibleCommits.map((commit) => (
              <article
                key={commit.id}
                className="rounded-2xl border border-(--border) bg-(--surface-elevated) p-4"
              >
                <a
                  href={commit.url}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold transition-colors hover:text-(--primary)"
                >
                  {getCommitMessage(commit.message)}
                </a>
                <div className="mt-2 flex flex-wrap gap-x-2 gap-y-1 text-xs text-(--muted)">
                  <a
                    href={commit.repositoryUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-(--primary-soft) hover:text-(--primary)"
                  >
                    {commit.repositoryName}
                  </a>
                  <span aria-hidden="true">·</span>
                  <time dateTime={commit.date}>
                    {formatDate(commit.date, locale)}
                  </time>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="text-sm text-(--muted)">{emptyLabel}</p>
        )}
      </CardContent>
    </Card>
  );
}

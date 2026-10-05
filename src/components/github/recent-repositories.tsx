import { GitFork } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { GitHubRecentRepository } from "@/lib/github";

type RecentRepositoriesProps = {
  emptyLabel: string;
  locale: string;
  repositories: GitHubRecentRepository[];
  title: string;
};

function formatDate(date: string, locale: string) {
  return new Intl.DateTimeFormat(locale, { dateStyle: "medium" }).format(
    new Date(date),
  );
}

export function RecentRepositories({
  emptyLabel,
  locale,
  repositories,
  title,
}: RecentRepositoriesProps) {
  return (
    <Card className="border-(--border) bg-(--surface) text-foreground shadow-xl shadow-(color:--shadow-medium)">
      <CardHeader>
        <div className="flex items-center gap-3">
          <GitFork aria-hidden="true" className="size-5 text-(--primary-glow)" />
          <CardTitle className="text-xl">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        {repositories.length ? (
          <div className="space-y-4">
            {repositories.map((repository) => (
              <article
                key={repository.url}
                className="rounded-2xl border border-(--border) bg-(--surface-elevated) p-4"
              >
                <a
                  href={repository.url}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold transition-colors hover:text-(--primary)"
                >
                  {repository.name}
                </a>
                <div className="mt-2 flex items-center gap-2 text-xs text-(--muted)">
                  <span>{repository.commitCount} commits</span>
                  <span aria-hidden="true">·</span>
                  <time dateTime={repository.latestCommitDate}>
                    {formatDate(repository.latestCommitDate, locale)}
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

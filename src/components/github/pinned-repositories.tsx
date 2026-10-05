import { Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { GitHubRepository } from "@/lib/github";

type PinnedRepositoriesProps = {
  emptyLabel: string;
  repositories: GitHubRepository[];
  starsLabel: string;
  title: string;
};

function getLanguageColor(color: string) {
  return /^#[0-9a-f]{6}$/i.test(color) ? color : "var(--primary)";
}

export function PinnedRepositories({
  emptyLabel,
  repositories,
  starsLabel,
  title,
}: PinnedRepositoriesProps) {
  return (
    <Card className="border-(--border) bg-(--surface) text-foreground shadow-xl shadow-(color:--shadow-medium)">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Star aria-hidden="true" className="size-5 text-(--primary-glow)" />
          <CardTitle className="text-xl">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        {repositories.length ? (
          <div className="space-y-4">
            {repositories.map((repository) => (
              <article
                key={repository.id}
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
                <p className="mt-2 text-sm leading-6 text-(--muted)">
                  {repository.description ?? emptyLabel}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-(--muted)">
                  {repository.language ? (
                    <span className="inline-flex items-center gap-2">
                      <span
                        aria-hidden="true"
                        className="size-2 rounded-full"
                        style={{
                          backgroundColor: getLanguageColor(
                            repository.language.color,
                          ),
                        }}
                      />
                      {repository.language.name}
                    </span>
                  ) : null}
                  <span className="inline-flex items-center gap-1">
                    <Star aria-hidden="true" className="size-3" />
                    {repository.stars} {starsLabel}
                  </span>
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

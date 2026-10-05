import { Briefcase } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Dictionary } from "@/i18n/dictionaries";

type ExperienceSectionProps = {
  content: Dictionary["sections"]["experience"];
  items: Dictionary["experience"];
};

export function ExperienceSection({
  content,
  items,
}: ExperienceSectionProps) {
  return (
    <Card className="space-y-6 border-(--border) bg-(--surface) text-foreground shadow-xl shadow-(color:--shadow-medium)">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Briefcase className="h-5 w-5 text-(--primary-glow)" />
          <CardTitle>{content.title}</CardTitle>
        </div>
        <CardDescription className="text-(--muted)">
          {content.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        {items.map((item) => (
          <article
            key={`${item.company}-${item.period}`}
            className="space-y-3 rounded-3xl border border-(--border) bg-(--surface) p-5"
          >
            <h3 className="text-lg font-semibold">{item.company}</h3>
            <p className="text-sm text-(--metadata)">{item.role}</p>
            <p className="text-sm text-(--primary-soft)">{item.period}</p>
            {item.details.map((detail) => (
              <p key={detail} className="text-(--muted)">
                {detail}
              </p>
            ))}
          </article>
        ))}
      </CardContent>
    </Card>
  );
}

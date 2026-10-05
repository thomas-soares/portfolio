import { Sparkles } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Dictionary } from "@/i18n/dictionaries";

type SummarySectionProps = {
  content: Dictionary["sections"]["summary"];
};

export function SummarySection({ content }: SummarySectionProps) {
  return (
    <Card className="border-(--border) bg-(--surface) text-foreground shadow-xl shadow-(color:--shadow-medium)">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Sparkles className="h-5 w-5 text-(--primary)" />
          <CardTitle>{content.title}</CardTitle>
        </div>
        <CardDescription className="text-(--muted)">
          {content.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 text-(--muted)">
        {content.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </CardContent>
    </Card>
  );
}

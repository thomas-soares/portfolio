import { GraduationCap } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Dictionary } from "@/i18n/dictionaries";

type EducationSectionProps = {
  content: Dictionary["sections"]["education"];
  items: Dictionary["education"];
};

export function EducationSection({
  content,
  items,
}: EducationSectionProps) {
  return (
    <Card className="border-(--border) bg-(--surface) text-foreground shadow-xl shadow-(color:--shadow-medium)">
      <CardHeader>
        <div className="flex items-center gap-3">
          <GraduationCap className="h-5 w-5 text-(--primary-glow)" />
          <CardTitle>{content.title}</CardTitle>
        </div>
        <CardDescription className="text-(--muted)">
          {content.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 text-(--muted)">
        {items.map((item) => (
          <div
            key={item.school}
            className="space-y-3 rounded-3xl border border-(--border) bg-(--surface) p-5"
          >
            <h3 className="font-semibold">{item.school}</h3>
            <p className="text-sm text-(--primary-soft)">{item.degree}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

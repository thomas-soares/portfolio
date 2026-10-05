import { NotFoundContent } from "@/components/not-found-content";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background pb-16 pt-10 text-foreground">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-6xl items-center justify-center px-6">
        <NotFoundContent />
      </div>
    </main>
  );
}

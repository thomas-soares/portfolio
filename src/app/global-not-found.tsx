import type { Metadata } from "next";
import { NotFoundContent } from "@/components/not-found-content";
import "./globals.css";

export const metadata: Metadata = {
  title: "Página não encontrada | Thomas Soares",
  description: "A página solicitada não foi encontrada.",
};

const themeScript = `
(() => {
  const theme = localStorage.getItem("theme") || "dark";
  document.documentElement.classList.toggle("light", theme === "light");
  document.documentElement.classList.toggle("dark", theme !== "light");
})();
`;

export default function GlobalNotFound() {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <main className="min-h-screen bg-background pb-16 pt-10 text-foreground">
          <div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-6xl items-center justify-center px-6">
            <NotFoundContent />
          </div>
        </main>
      </body>
    </html>
  );
}

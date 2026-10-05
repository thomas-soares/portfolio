import { ArrowLeft, Home, SearchX } from "lucide-react";
import Link from "next/link";

export function NotFoundContent() {
  return (
    <section
      aria-labelledby="not-found-title"
      className="w-full max-w-3xl rounded-4xl border border-(--border) bg-(--surface)/95 p-8 text-center shadow-2xl shadow-(color:--shadow-strong) backdrop-blur-xl sm:p-12"
    >
      <div className="mx-auto flex size-20 items-center justify-center rounded-3xl border border-(--border) bg-(--surface-elevated) text-(--primary)">
        <SearchX aria-hidden="true" className="size-10" />
      </div>

      <p className="mt-8 text-sm font-semibold uppercase tracking-[0.28em] text-(--metadata)">
        Erro 404
      </p>
      <h1
        id="not-found-title"
        className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl"
      >
        Essa página saiu do mapa.
      </h1>
      <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-(--muted)">
        O endereço que você acessou não existe ou foi movido. Volte para o
        início e continue explorando o portfólio.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-(--primary) px-6 py-3 text-sm font-semibold text-(--primary-foreground) transition-colors hover:bg-(--primary-hover) hover:text-(--primary-hover-foreground)"
        >
          <Home aria-hidden="true" className="size-4" />
          Página inicial
        </Link>
        <Link
          href="/en"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-(--border) bg-(--surface) px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-(--surface-elevated)"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          English version
        </Link>
      </div>
    </section>
  );
}

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoWhite from "@/assets/rca-logo-white.png";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#solucoes", label: "Soluções" },
  { href: "#sobre", label: "Sobre a RCA" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy-foreground/10 bg-navy/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#inicio" className="flex items-center">
          <img
            src={logoWhite}
            alt="RCA Inteligência Corporativa"
            className="h-8 w-auto sm:h-9"
          />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-navy-foreground/75 transition-colors hover:text-highlight"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button variant="highlight" size="default" asChild>
            <a href="#contato">Fale com um especialista</a>
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-navy-foreground lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-navy-foreground/10 bg-navy px-4 pb-5 pt-2 lg:hidden">
          <nav className="flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm font-medium text-navy-foreground/80 hover:text-highlight"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <Button variant="highlight" className="mt-3 w-full" asChild>
            <a href="#contato" onClick={() => setOpen(false)}>
              Fale com um especialista
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}

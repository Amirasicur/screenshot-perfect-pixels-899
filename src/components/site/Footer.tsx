const linkGroups = [
  {
    title: "Navegação",
    items: [
      { label: "Início", href: "#inicio" },
      { label: "Soluções", href: "#solucoes" },
      { label: "Sobre a RCA", href: "#sobre" },
      { label: "Contato", href: "#contato" },
    ],
  },
  {
    title: "Contato",
    items: [
      { label: "E-mail: [inserir e-mail]", href: "#contato" },
      { label: "Telefone: [inserir telefone]", href: "#contato" },
      { label: "Endereço: [inserir endereço]", href: "#contato" },
    ],
  },
  {
    title: "Redes sociais",
    items: [
      { label: "LinkedIn: [inserir link]", href: "#contato" },
      { label: "Instagram: [inserir link]", href: "#contato" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-highlight font-display text-sm font-bold text-highlight-foreground">
                RCA
              </span>
              <span className="font-display text-sm font-semibold">RCA Inteligência Corporativa</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-navy-foreground/70">
              Consultoria em tecnologia, gestão de ITSM e outsourcing de profissionais de TI.
            </p>
          </div>

          {linkGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold text-highlight">{group.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-navy-foreground/70 transition-colors hover:text-navy-foreground"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-navy-foreground/15 pt-6 text-xs text-navy-foreground/60">
          © {new Date().getFullYear()} RCA Inteligência Corporativa. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

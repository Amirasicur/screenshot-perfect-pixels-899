import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Compass, Headset, Users, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ContactForm } from "@/components/site/ContactForm";
import heroImg from "@/assets/hero-rca.jpg";
import sobreImg from "@/assets/sobre-rca.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RCA Inteligência Corporativa | Consultoria, ITSM e Outsourcing de TI" },
      {
        name: "description",
        content:
          "A RCA apoia empresas em consultoria tecnológica, gestão de ITSM e outsourcing de profissionais de TI para projetos e alocação.",
      },
      {
        property: "og:title",
        content: "RCA Inteligência Corporativa | Consultoria, ITSM e Outsourcing de TI",
      },
      {
        property: "og:description",
        content:
          "Tecnologia, serviços e talentos para impulsionar o seu negócio: consultoria, ITSM e outsourcing de profissionais de TI.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const solucoes = [
  {
    icon: Compass,
    title: "Consultoria em Tecnologia",
    text: "Apoio para avaliar desafios, definir caminhos e implementar soluções alinhadas aos objetivos do negócio.",
    items: ["Diagnóstico do cenário atual", "Definição de caminhos técnicos", "Apoio na implementação"],
  },
  {
    icon: Headset,
    title: "Gestão de ITSM",
    text: "Estruturação e melhoria da gestão de serviços de TI, com foco em processos, qualidade, eficiência e experiência dos usuários.",
    items: ["Desenho e revisão de processos", "Indicadores e níveis de serviço", "Experiência dos usuários"],
  },
  {
    icon: Users,
    title: "Outsourcing de Profissionais de TI",
    text: "Disponibilização de profissionais para projetos temporários ou alocação junto ao cliente, conforme a necessidade de cada operação.",
    items: ["Projetos temporários", "Alocação nas instalações do cliente", "Perfis conforme a demanda"],
  },
];

const diferenciais = [
  {
    title: "Soluções sob medida",
    text: "Cada proposta considera a realidade, o porte e as prioridades da empresa.",
  },
  {
    title: "Profissionais alinhados",
    text: "Perfis selecionados conforme os desafios e o contexto de cada projeto.",
  },
  {
    title: "Eficiência e continuidade",
    text: "Foco em qualidade e continuidade dos serviços de TI no dia a dia.",
  },
  {
    title: "Atuação próxima",
    text: "Trabalho colaborativo, transparente e orientado a resultados.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero */}
        <section id="inicio" className="relative overflow-hidden bg-navy">
          <div className="absolute inset-0">
            <img
              src={heroImg}
              alt="Equipe de consultores de tecnologia analisando indicadores em um ambiente corporativo"
              width={1600}
              height={1104}
              className="h-full w-full object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/60" />
          </div>

          <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
            <div className="max-w-2xl">
              <span className="inline-flex items-center rounded-full border border-highlight/40 bg-highlight/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-highlight">
                Consultoria · ITSM · Outsourcing
              </span>
              <h1 className="mt-6 text-balance-tight text-4xl font-bold leading-[1.1] text-navy-foreground sm:text-5xl lg:text-6xl">
                Tecnologia, serviços e talentos para impulsionar o seu negócio.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-foreground/80 sm:text-lg">
                A RCA Inteligência Corporativa ajuda empresas a evoluir sua operação de TI,
                aprimorar a gestão de serviços e encontrar profissionais qualificados para suas
                necessidades.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button variant="highlight" size="xl" asChild>
                  <a href="#solucoes">
                    Conheça nossas soluções <ArrowRight />
                  </a>
                </Button>
                <Button variant="onNavy" size="xl" asChild>
                  <a href="#contato">Converse com a RCA</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Soluções */}
        <section id="solucoes" className="bg-background py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-brand">Soluções</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Três frentes de atuação</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Atuamos de forma integrada ou pontual, conforme o momento e a estrutura de cada
                cliente.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {solucoes.map((s) => (
                <article
                  key={s.title}
                  className="group flex flex-col rounded-2xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-lift"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-navy-foreground transition-colors group-hover:bg-brand">
                    <s.icon className="size-6" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                  <ul className="mt-5 space-y-2 border-t border-border pt-5">
                    {s.items.map((i) => (
                      <li key={i} className="flex gap-2 text-sm text-foreground/80">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand" />
                        {i}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="mt-10">
              <Button variant="brand" size="lg" asChild>
                <a href="#contato">
                  Fale com um especialista <ArrowRight />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Diferenciais */}
        <section className="bg-surface py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-brand">
                  Diferenciais
                </p>
                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  Uma parceria próxima, do diagnóstico à operação
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Combinamos conhecimento técnico e entendimento do negócio para sustentar decisões
                  de TI com clareza.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {diferenciais.map((d) => (
                  <div key={d.title} className="rounded-xl border border-border bg-card p-6">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-highlight/20 text-highlight-foreground">
                      <CheckCircle2 className="size-5" />
                    </span>
                    <h3 className="mt-4 text-base font-semibold">{d.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Sobre */}
        <section id="sobre" className="bg-background py-20 lg:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
            <div className="overflow-hidden rounded-2xl border border-border shadow-card">
              <img
                src={sobreImg}
                alt="Profissionais analisando processos de gestão de serviços de TI"
                width={1200}
                height={912}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-brand">Sobre a RCA</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Parceira de empresas que querem usar a tecnologia com mais eficiência
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  A RCA Inteligência Corporativa é uma empresa de consultoria em tecnologia que
                  atua junto a organizações que buscam usar a tecnologia e os serviços de TI de
                  forma mais eficiente.
                </p>
                <p>
                  Nosso trabalho reúne consultoria tecnológica, gestão de ITSM e outsourcing de
                  profissionais de TI para projetos temporários ou alocação nas instalações do
                  cliente, sempre a partir do contexto e das prioridades de cada operação.
                </p>
                <p>
                  Atuamos de forma próxima às equipes do cliente, com foco em processos claros,
                  continuidade dos serviços e resultados consistentes ao longo do tempo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className="bg-navy py-20 lg:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <h2 className="text-3xl font-bold text-navy-foreground sm:text-4xl">
                Vamos entender o desafio da sua empresa?
              </h2>
              <p className="mt-5 text-base leading-relaxed text-navy-foreground/80">
                Conte o seu cenário e retornamos com os próximos passos possíveis em consultoria,
                ITSM ou alocação de profissionais.
              </p>
              <dl className="mt-8 space-y-4 text-sm text-navy-foreground/75">
                <div>
                  <dt className="font-semibold text-highlight">E-mail</dt>
                  <dd>[inserir e-mail de contato]</dd>
                </div>
                <div>
                  <dt className="font-semibold text-highlight">Telefone</dt>
                  <dd>[inserir telefone de contato]</dd>
                </div>
                <div>
                  <dt className="font-semibold text-highlight">Endereço</dt>
                  <dd>[inserir endereço]</dd>
                </div>
              </dl>
            </div>

            <div className="rounded-2xl bg-card p-6 shadow-lift sm:p-8">
              <h3 className="text-lg font-semibold">Fale com a RCA</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Preencha os campos e entraremos em contato.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

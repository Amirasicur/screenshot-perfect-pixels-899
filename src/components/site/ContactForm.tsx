import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [sending, setSending] = useState(false);

  return (
    <form
      className="grid gap-4 sm:grid-cols-2"
      onSubmit={(e) => {
        e.preventDefault();
        setSending(true);
        // Envio ainda não conectado a um destino de e-mail.
        setTimeout(() => {
          setSending(false);
          toast.success("Mensagem registrada", {
            description: "O envio automático ainda precisa ser configurado.",
          });
          (e.target as HTMLFormElement).reset();
        }, 600);
      }}
    >
      <div className="space-y-2">
        <Label htmlFor="nome">Nome</Label>
        <Input id="nome" name="nome" required placeholder="Seu nome completo" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="empresa">Empresa</Label>
        <Input id="empresa" name="empresa" placeholder="Nome da empresa" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">E-mail</Label>
        <Input id="email" name="email" type="email" required placeholder="nome@empresa.com.br" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="telefone">Telefone</Label>
        <Input id="telefone" name="telefone" placeholder="(00) 00000-0000" />
      </div>
      <div className="space-y-2 sm:col-span-2">
        <Label htmlFor="mensagem">Mensagem</Label>
        <Textarea
          id="mensagem"
          name="mensagem"
          rows={5}
          placeholder="Conte brevemente o desafio da sua operação de TI."
        />
      </div>
      <div className="sm:col-span-2">
        <Button type="submit" variant="brand" size="lg" className="w-full" disabled={sending}>
          {sending ? "Enviando..." : "Fale com a RCA"}
        </Button>
        <p className="mt-3 text-xs text-muted-foreground">
          Os dados enviados são usados apenas para retorno do contato.
        </p>
      </div>
    </form>
  );
}

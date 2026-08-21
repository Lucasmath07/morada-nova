import { Section } from "@/src/components/shared/Section";
import { Button } from "@/src/components/shared/Button";
export function HeroSection() {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat w-full min-h-screen flex flex-col justify-center px-6 py-12 text-brand-foreground"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(30, 58, 138, 0.7), rgba(10, 37, 79, 0.95)), url('/hero-logo.jpeg')",
      }}
    >
      <div className="max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold md:text-6xl tracking-tight">
          O FUTURO NASCE AQUI
        </h1>
        <p className="text-lg text-blue-100/90 leading-relaxed text-center">
          Transformando vidas através do esporte. A Associação Esportiva e
          Cultural Morada Nova é um projeto social dedicado ao desenvolvimento
          de jovens e adolescentes, formando atletas e cidadãos para o futuro.
        </p>
      {/*  <div className="flex items-center gap-3">
          <Button variant="solidTwo">CONHEÇA O PROJETO</Button>
          <Button variant="outline">
            SEJA UM APOIADOR
          </Button>
        </div>*/}
      </div>
    </section>
  );
}

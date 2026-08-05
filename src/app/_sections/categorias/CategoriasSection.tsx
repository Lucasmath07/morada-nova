import { SectionTitle } from "@/src/components/shared/SectionTitle";
import { Section } from "@/src/components/shared/Section";

// Criamos um array com os nomes das categorias para não precisar repetir código
const categorias = ["SUB-11", "SUB-13", "SUB-15", "SUB-17"];

export function CategoriasSection() {
  return (
    <Section className="bg-brand/5">
      <div className="flex flex-col items-center text-center gap-4 mb-10">
        <SectionTitle>CATEGORIAS DE BASE</SectionTitle>
        <p className="max-w-3xl">
          Nossas categorias são estruturadas para o acolhimento e
          desenvolvimento progressivo de crianças e adolescentes, unindo
          educação, disciplina e esporte.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {categorias.map((categoria) => (
          <div
            key={categoria}
            className="relative overflow-hidden group w-full h-[400px] rounded-xl shadow-md"
          >
          
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 ease-in-out group-hover:scale-110"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom, rgba(30, 58, 138, 0.0), rgba(30, 58, 138, 0.9)), url('/hero-logo.jpeg')",
              }}
            />

            
            <div className="relative z-10 flex items-end justify-center w-full h-full px-6 py-12 text-brand-foreground">
              <p className="text-2xl font-bold">{categoria}</p>
            </div>
          </div>
        ))}

      </div>
    </Section>
  );
}
import { SectionTitle } from "@/src/components/shared/SectionTitle";
import { Section } from "@/src/components/shared/Section";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function NoticiasSection() {
  return (
    <Section className="mt-10 mb-20">
      {/* Cabeçalho da Seção */}
      <div className="flex flex-col sm:flex-row w-full sm:items-end justify-between gap-4">
        <div>
          <p className="text-secondary font-semibold">ACOMPANHE</p>
          <SectionTitle>ÚLTIMOS RESULTADOS & NOTÍCIAS</SectionTitle>
        </div>
        <div className="flex items-center gap-1 shrink-0">
          <a
            href="#"
            className="text-brand font-bold hover:opacity-75 transition-opacity"
          >
            VER TUDO
          </a>
          <ArrowRight className="text-brand w-5 h-5" />
        </div>
      </div>

      {/* Container Principal: Grid responsivo (1 coluna mobile, 2 colunas desktop) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10 items-start w-full">
        {/* Lado Esquerdo: Notícia Principal */}
        <div className="flex flex-col border border-border rounded-2xl shadow-lg shadow-brand/25 w-full h-full overflow-hidden">
          <Image
            src="/hero-logo.jpeg"
            alt="imagem do time completo"
            width={750}
            height={500}
            className="w-full h-auto aspect-video object-cover"
          />
          <div className="flex flex-col gap-2 mt-4 mb-6 px-5 w-full">
            <p className="text-sm opacity-70">15 de Julho, 2026</p>
            <h2 className="text-2xl font-bold leading-tight">
              SUB-17 CONQUISTA VITÓRIA HERÓICA E SE CLASSIFICA PARA A GRANDE
              FINAL
            </h2>
            <p className="opacity-80">
              Com dois gols no segundo tempo, a equipe comandada pelo técnico
              Francisco mostrou resiliência e tática para superar o adversário
              em um jogo truncado.
            </p>
          </div>
        </div>

        {/* Lado Direito: Notícias Secundárias */}
        <div className="flex flex-col gap-6 w-full">
          {/* Notícia Secundária 1 */}
          <div className="flex flex-col sm:flex-row border border-border rounded-2xl shadow-lg shadow-brand/25 w-full overflow-hidden">
            <Image
              src="/hero-logo.jpeg"
              alt="imagem do time"
              width={300}
              height={200}
              className="w-full sm:w-2/5 h-48 sm:h-auto object-cover"
            />
            <div className="flex flex-col gap-2 p-5 w-full sm:w-3/5 justify-center">
              <p className="text-sm opacity-70">15 de Julho, 2026</p>
              <h2 className="text-lg font-bold leading-tight">
                SUB-17 CONQUISTA VITÓRIA HERÓICA E SE CLASSIFICA PARA A GRANDE
                FINAL
              </h2>
            </div>
          </div>

          {/* Notícia Secundária 2 */}
          <div className="flex flex-col sm:flex-row border border-border rounded-2xl shadow-lg shadow-brand/25 w-full overflow-hidden">
            <Image
              src="/hero-logo.jpeg"
              alt="imagem do time"
              width={300}
              height={200}
              className="w-full sm:w-2/5 h-48 sm:h-auto object-cover"
            />
            <div className="flex flex-col gap-2 p-5 w-full sm:w-3/5 justify-center">
              <p className="text-sm opacity-70">15 de Julho, 2026</p>
              <h2 className="text-lg font-bold leading-tight">
                SUB-17 CONQUISTA VITÓRIA HERÓICA E SE CLASSIFICA PARA A GRANDE
                FINAL
              </h2>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

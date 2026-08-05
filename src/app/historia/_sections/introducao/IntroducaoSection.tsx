import { Section } from "@/src/components/shared/Section";
import { SectionTitle } from "@/src/components/shared/SectionTitle";
export function IntroducaoSection() {
  return (
    <Section className="mt-14 pt-16 pb-16">
      <div className="flex gap-8">
        <div>
          <SectionTitle className="pl-4 border-l-8 border-secondary mb-8">
            O COMEÇO DE UM SONHO
          </SectionTitle>
          <p>
            Com desejo de ajudar a comunidade através do esporte, a
            Associação Esportiva e Cultural Morada Nova não é apenas um clube de
            futebol. É um pilar de esperança e desenvolvimento humano que atende
            crianças e adolescentes de todas as categorias, do sub-8 ao sub-20.
          </p>
          <p className="mt-4">
            Desde os primeiros treinos em campos de terra até a estrutura de
            hoje, nossa trajetória é marcada pela inclusão. Cada drible, cada
            gol e cada vitória foram construídos com o suor de quem acredita que
            o esporte é a maior ferramenta de transformação social para a nossa
            juventude.
          </p>
        </div>
        <div>
          <div className="border-5 border-brand w-[450] h-[300] flex items-center justify-center text-brand">IMAGEM</div>
        </div>
      </div>
    </Section>
  );
}

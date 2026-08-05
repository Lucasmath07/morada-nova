import { Section } from "@/src/components/shared/Section";
import { SectionTitle } from "@/src/components/shared/SectionTitle";
export function CrescimentoSection() {
  return (
    <Section className="mt-14 bg-brand-foreground pt-16 pb-16">
      <div className="flex gap-8">
        <div>
          <div className="border-5 border-brand w-[450] h-[300] flex items-center justify-center text-brand">
            IMAGEM
          </div>
        </div>
        <div>
          <SectionTitle className="pl-4 border-l-8 border-secondary mb-8">
            OCRESCIMENTO E SUPERAÇÃO
          </SectionTitle>
          <p>
            Com o passar dos anos, o projeto ganhou corpo. As dificuldades
            iniciais forjaram uma identidade resiliente no Morada Nova. Novas
            categorias de base foram criadas, competições regionais começaram a
            ser disputadas, e o nome do clube ecoou cada vez mais forte pelos
            campos da cidade.
          </p>
          <p className="mt-4">
            Essa expansão exigiu sacrifícios. A evolução da estrutura de
            treinamento, a aquisição de materiais adequados e a busca por
            profissionais qualificados foram marcos de uma comunidade que
            abraçou a causa. Cada novo troféu levantado não representava apenas
            uma vitória esportiva, mas a superação de barreiras estruturais e
            financeiras, provando que o talento, aliado à disciplina, alcança o
            impossível.
          </p>
        </div>
      </div>
    </Section>
  );
}

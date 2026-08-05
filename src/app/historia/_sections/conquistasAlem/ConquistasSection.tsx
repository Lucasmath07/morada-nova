import { Section } from "@/src/components/shared/Section";
import { SectionTitle } from "@/src/components/shared/SectionTitle";
export function ConquistasSection() {
  return (
    <Section className="mt-14 pt-16 pb-16">
      <div className="flex gap-8">
        <div>
          <SectionTitle className="pl-4 border-l-8 border-secondary mb-8">
            O CRESCIMENTO E SUPERAÇÃO
          </SectionTitle>
          <p>
            Nossa verdadeira vitória não se mede apenas nas vitrines de troféus. O maior legado da AEC Morada Nova é a formação de cidadãos. Ao longo de mais de duas décadas de atuação, vimos com orgulho nossos jovens atletas se tornarem profissionais respeitados, pais de família e líderes positivos em sua comunidade.
          </p>
          <p className="mt-4">
            Nossa verdadeira vitória não se mede apenas nas vitrines de troféus. O maior legado da AEC Morada Nova é a formação de cidadãos. Ao longo de mais de duas décadas de atuação, vimos com orgulho nossos jovens atletas se tornarem profissionais respeitados, pais de família exemplares e líderes positivos em suas comunidades.
          </p>
        </div>
        <div>
          <div className="border-5 border-brand w-[450px] h-[300px] flex items-center justify-center text-brand">
            IMAGEM
          </div>
        </div>
      </div>
    </Section>
  );
}

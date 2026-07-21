import { SectionTitle } from "@/src/components/shared/SectionTitle";
import { Section } from "@/src/components/shared/Section";
import { ArrowRight } from "lucide-react";
export function NoticiasSection() {
  return (
    <Section>
      <div className="flex w-full items-center justify-around">
        <div>
          <p className="text-secondary">ACOMPANHE</p>
          <SectionTitle>ÚLTIMOS RESULTADOS & NOTÍCIAS</SectionTitle>
        </div>
        <div className="flex gap-1">
          <a href="#" className="text-brand">VER TUDO </a>
          <ArrowRight className="text-brand"/>
        </div>
      </div>
      <div>
        <div>
          <img src="hero-logo.jpeg" alt="" />
          <div>
            <p>15 de Julho, 2026</p>
            <h2 className="text-2xl">SUB-17 CONQUISTA VITÓRIA HERÓICA E SE CLASSIFICA PARA A GRANDE FINAL</h2>
            <p>Com dois gols no segundo tempo, a equipe comandada pelo técnico Francisco mostrou resiliência e tática para superar o adversário em um jogo truncado.</p>
          </div>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </Section>
  );
}

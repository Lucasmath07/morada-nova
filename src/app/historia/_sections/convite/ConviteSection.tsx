import { Section } from "@/src/components/shared/Section"
import { SectionTitle } from "@/src/components/shared/SectionTitle"
import { Button } from "@/src/components/shared/Button"
export function Convite(){
  return(
    <Section className="border-6 border-brand p-8 mt-4 mb-4 bg-brand-foreground" containerClassName="flex flex-col items-center justify-center gap-8">
      <SectionTitle>FAÇA PARTE DESSA HISTÓRIA</SectionTitle>
      <p className="max-w-[530] text-center">Seja como atleta, voluntário ou patrocinador, sua contribuição ajuda a manter vivo o sonho de centenas de jovens.</p>
      <div className="flex gap-4">
        <Button className="" variant="solidOne">QUERO APOIAR</Button>
        <Button variant="outline">FALE CONOSCO</Button>
      </div>
    </Section>
  )
}
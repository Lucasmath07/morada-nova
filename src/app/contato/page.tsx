import { HeroSection } from "@/src/app/contato/_sections/hero/HeroSection"
import { DadosSection } from "./_sections/dados/DadosSection"
import { FormSection } from "./_sections/form/FormSection"
export default function Contato(){
  return(
    <div>
      <HeroSection/>
      <DadosSection/>
      <FormSection/>
    </div>
  )
}
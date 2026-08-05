import { HeroSection } from "./_sections/hero/HeroSection";
import { NoticiasSection } from "./_sections/noticias/NoticiasSection";
import { CategoriasSection } from "./_sections/categorias/CategoriasSection";


export default function Home() {
  return (
   <>
    <HeroSection/>
    <NoticiasSection/>
    <CategoriasSection/>
   </>
  );
}

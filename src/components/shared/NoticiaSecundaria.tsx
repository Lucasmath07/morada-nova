import Image from "next/image";
import { NoticiasSecundariasDados} from "@/src/app/_sections/noticias/dados/NoticiasSecundarias";


export function NoticiaSecundaria() {
  return (
    <>
    
    {NoticiasSecundariasDados.map((noticia,index)=>(
        
           <div key={index} className="flex flex-col sm:flex-row border border-border rounded-2xl shadow-lg shadow-brand/25 w-full overflow-hidden hover:scale-101 transition-all duratnio-200 hover:shadow-brand/50">
      <Image
        src="/hero-logo.jpeg"
        alt="imagem do time"
        width={300}
        height={200}
        className="w-full sm:w-2/5 h-48 sm:h-auto object-cover"
      />
      <div className="flex flex-col gap-2 p-5 w-full sm:w-3/5 justify-center">
        <p className="text-sm opacity-70">{noticia.data}</p>
        <h2 className="text-lg font-bold leading-tight">
          {noticia.titulo}
        </h2>
      </div>
    </div>
        
  ))}
   
  </>);

}

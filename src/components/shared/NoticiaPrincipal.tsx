import Image from "next/image";
import { NoticiaPrincipalDados } from '@/src/app/_sections/noticias/dados/NoticiaPrincipalDados';




export function NoticiaPrincipal() {
  return (
    
      <div className="flex flex-col border border-border rounded-2xl shadow-lg shadow-brand/25 w-full h-full overflow-hidden hover:scale-101 transition-all duratnio-200 hover:shadow-brand/50">
        <Image
          src="/hero-logo.jpeg"
          alt="imagem do time completo"
          width={750}
          height={500}
          className="w-full h-auto aspect-video object-cover"
        />
        <div className="flex flex-col gap-2 mt-4 mb-6 px-5 w-full">
          <p className="text-sm opacity-70">{NoticiaPrincipalDados.data}</p>
          <h2 className="text-2xl font-bold leading-tight">
            {NoticiaPrincipalDados.titulo}
          </h2>
          <p className="opacity-80">
            {NoticiaPrincipalDados.resumo}
          </p>
        </div>
      </div>
    
  );
}

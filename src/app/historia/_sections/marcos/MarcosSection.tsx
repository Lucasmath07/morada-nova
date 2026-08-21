import { Section } from "@/src/components/shared/Section"
import Image from "next/image";


const marcos = [
  {
    year: "98",
    title: "O SURGIMENTO",
    description: "Fundação oficial da AECMN como projeto comunitário.",
    image: "/historia/surgimento.jpg", 
    isGreen: true,
  },
  {
    year: "05",
    title: "PRIMEIRA GLÓRIA",
    description: "Conquista do Campeonato Municipal Sub-17, o primeiro troféu oficial.",
    image: "/historia/primeira-gloria.jpg",
    isGreen: false,
  },
  {
    year: "12",
    title: "EXPANSÃO E CULTURA",
    description: "Inclusão de atividades culturais e educacionais no estatuto do clube.",
    image: "",
    isGreen: true,
  },
  {
    year: "23",
    title: "HEGEMONIA REGIONAL",
    description: "Título Invicto da Copa Sul de Futebol de Base.",
    image: "/historia/hegemonia.jpg",
    isGreen: false,
  },
];

export function MarcosSection() {
  return (
    
    <section className="py-20 bg-[#F8F9FA] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#144B9E] mb-20 uppercase tracking-wide">
          Marcos Históricos
        </h2>

        
        <div className="relative">
          
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[3px] bg-[#144B9E] -translate-x-1/2"></div>

          <div className="flex flex-col gap-12 md:gap-0">
            {marcos.map((item, index) => {
              
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.year}
                  className={`relative flex flex-col md:flex-row items-center justify-between w-full md:mb-16 ${
                    isEven ? "" : "md:flex-row-reverse"
                  }`}
                >
                  
                  <div
                    className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-12 h-12 rounded-full text-white font-bold text-lg border-4 border-[#F8F9FA] ${
                      item.isGreen ? "bg-[#007F5F]" : "bg-[#144B9E]"
                    }`}
                  >
                    {item.year}
                  </div>

                  
                  <div
                    className={`w-full md:w-5/12 flex flex-col px-4 mb-6 md:mb-0 text-center ${
                      isEven ? "md:items-end md:text-right" : "md:items-start md:text-left"
                    }`}
                  >
                    <h3 className="text-lg md:text-xl font-bold text-[#144B9E] mb-2 uppercase">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-sm md:text-base max-w-sm">
                      {item.description}
                    </p>
                  </div>

                  
                  <div className="w-full md:w-5/12 px-4">
                    <div className="relative w-full aspect-video shadow-md border-2 border-transparent hover:border-[#144B9E] transition-colors duration-300">
                      
                      <Image
                        src={item.image}
                        alt={`Imagem representando o marco: ${item.title}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
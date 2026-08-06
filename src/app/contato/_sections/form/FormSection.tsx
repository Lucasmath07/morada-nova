import { Section } from "@/src/components/shared/Section";
import Image from "next/image";
import { CopyButton } from "@/src/components/shared/CopyButton";
import { Send } from "lucide-react";

const QrCodePath = "/hero-logo.jpeg";

export function FormSection() {
  const chavePix = "00.000.000/0001-00";

  return (
    <Section>
      
      <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-8 items-start">
        
        
        <div className="flex flex-col gap-6 w-full">
          
          
          <div className="bg-brand text-brand-foreground flex flex-col items-center justify-center text-center p-8 rounded-lg">
            <h2 className="text-xl font-bold uppercase tracking-wide mb-3">
              Doação Instantânea (PIX)
            </h2>
            <p className="text-xs opacity-90 leading-relaxed mb-6">
              Qualquer valor ajuda a custear uniformes, inscrições em campeonatos
              e lanches para nossos atletas da base.
            </p>

            
            <div className="bg-card p-3 rounded-md mb-6">
              <Image
                src={QrCodePath}
                alt="QR Code para doação (PIX)"
                width={180}
                height={180}
                className="object-contain"
              />
            </div>

            <p className="text-[10px] uppercase font-semibold tracking-wider opacity-80 mb-2">
              Chave PIX (CNPJ)
            </p>

            
            <div className="bg-footer/50 w-full py-2.5 px-4 mb-3 rounded-md text-center">
              <span className="font-mono text-sm tracking-widest font-bold text-brand-foreground">
                {chavePix}
              </span>
            </div>

            
            <CopyButton 
              className="text-xs uppercase tracking-wider font-semibold text-brand-foreground hover:opacity-80 transition-opacity" 
              textToCopy={chavePix} 
            />
          </div>

          
          <div className="border border-brand flex flex-col bg-card rounded-lg overflow-hidden">
            
            <div className="relative w-full h-[220px] bg-muted">
              <Image
                src={QrCodePath}
                alt="Manto Oficial"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-5 flex flex-col items-start gap-3">
              
              <span className="bg-secondary text-secondary-foreground text-[10px] font-bold px-2.5 py-1 uppercase tracking-wider rounded-sm">
                Manto Oficial
              </span>

              <h2 className="text-brand font-extrabold text-xl uppercase tracking-tight leading-tight">
                Vista as cores do Morada
              </h2>

              <p className="text-xs text-muted-foreground leading-relaxed">
                Ao adquirir o uniforme oficial, 100% do lucro é revertido para os projetos sociais do clube.
              </p>

              
              <p className="text-secondary">PARA MAIS INFORMAÇÕES ENTRE EM CONTATO</p>
            </div>
          </div>

        </div>

        
        <div className="bg-muted p-8 lg:p-10 rounded-xl flex flex-col justify-between h-full border border-border">
          <div>
            <h2 className="text-brand font-extrabold text-2xl uppercase tracking-wide mb-3">
              Sua Empresa no Time
            </h2>
            <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-8">
              Buscamos parceiros locais que acreditem no poder transformador do esporte. 
              Torne-se um patrocinador oficial e vincule sua marca a um projeto de impacto social real.
            </p>

            <form className="flex flex-col gap-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    Nome do Responsável
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: João Silva"
                    className="bg-transparent border-b border-border py-1.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-brand transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    Nome da Empresa
                  </label>
                  <input
                    type="text"
                    placeholder="Empresa LTDA"
                    className="bg-transparent border-b border-border py-1.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-brand transition-colors"
                  />
                </div>
              </div>

              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    E-mail Corporativo
                  </label>
                  <input
                    type="email"
                    placeholder="contato@empresa.com"
                    className="bg-transparent border-b border-border py-1.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-brand transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    Telefone/WhatsApp
                  </label>
                  <input
                    type="tel"
                    placeholder="(00) 00000-0000"
                    className="bg-transparent border-b border-border py-1.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-brand transition-colors"
                  />
                </div>
              </div>

              
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  Interesse de Patrocínio
                </label>
                <select className="bg-transparent border-b border-border py-1.5 text-sm text-foreground focus:outline-none focus:border-brand transition-colors cursor-pointer">
                  <option value="uniforme" className="bg-card text-foreground">Uniforme de Jogo</option>
                  <option value="evento" className="bg-card text-foreground">Apoio em Eventos</option>
                  <option value="material" className="bg-card text-foreground">Material Esportivo</option>
                </select>
              </div>

              
              <div className="flex flex-col gap-1.5 mt-2">
                <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  Mensagem (Opcional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Como você gostaria de ajudar o AEC?"
                  className="bg-transparent border-b border-border py-1.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-brand transition-colors resize-none"
                />
              </div>

              
              <button
                type="submit"
                className="mt-6 w-full bg-brand text-brand-foreground py-4 px-6 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 rounded-md hover:bg-brand/90 transition-all active:scale-[0.99] cursor-pointer"
              >
                <span>Enviar Proposta de Parceria</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>

      </div>
    </Section>
  );
}
import { Section } from "@/src/components/shared/Section";
import Image from "next/image";
import { CopyButton } from "@/src/components/shared/CopyButton";

const QrCodePath = "/hero-logo.jpeg";

export function FormSection() {
  const chavePix = "00.00.0000";
  return (
    <Section>
      <div>
        <div className="bg-brand text-brand-foreground flex flex-col items-center justify-center gap-4 w-[350] p-8">
          <h2 className="text-2xl text-center font-bold">DOAÇÃO INSTANTÂNEA (PIX)</h2>
          <p>
            Qualquer valor ajuda a custear uniformes, inscrições em campeonatos
            e lanches para nossos atletas da base.
          </p>
          <Image
            src={QrCodePath}
            alt="QR Code para doação (PIX)"
            width={200}
            height={200}
          />
          <p className="text-xs text-brand-foreground">CHAVE PIX (CNPJ):</p>
          <div className="bg-brand/70">
            <p className="font-semibold p-4 bg-secondary/30">{chavePix}</p>
          </div>
          <CopyButton className="text-footerTitle" textToCopy={chavePix} />
        </div>
        <div className="w-[350px] flex flex-col gap-2 border-3 border-brand mt-8">
          <Image src={QrCodePath} alt="camisa" width={350} height={200}/>
          <div className="p-4">
            <div className="bg-secondary p-1 w-[150px] flex items-center justify-center mt-2 mb-2">
            <p className="text-brand-foreground">MANTO OFICIAL</p>
          </div>
          <h2 className="text-brand font-bold text-2xl">VISTA AS CORES DO MORADA</h2>
          <p>Ao adquirir o uniforme oficial, 100% do lucro é revertido para os projetos sociais do clube.</p>
          <p className="text-secondary">ENTRE EM CONTATO PARA MAIS INFORMAÇÔES</p>
        </div>
          </div>
          
      </div>
      <div></div>
    </Section>
  );
}

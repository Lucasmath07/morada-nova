import { Section } from "@/src/components/shared/Section";
import { SectionTitle } from "@/src/components/shared/SectionTitle";
import { MapPin, Clock, Navigation } from "lucide-react";

export function LocalizacaoSection() {
  return (
    <Section containerClassName="flex flex-col gap-10">
      <div className="flex flex-col sm:flex-row w-full sm:items-end justify-between gap-4">
        <div>
          <p className="text-secondary font-semibold">ONDE ESTAMOS</p>
          <SectionTitle>LOCALIZAÇÃO</SectionTitle>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        
        <div className="w-full h-[350px] sm:h-[400px] border-2 border-border overflow-hidden rounded-3xl shadow-sm">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.5098906633875!2d-35.29913299999999!3d-5.924207599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b257aeb0ab63f5%3A0x89098a708e560ab1!2sArena%20Morada%20Nova!5e0!3m2!1spt-BR!2sbr!4v1787259700632!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>

       
        <div className="flex flex-col gap-6 justify-center">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-brand text-brand-foreground flex items-center justify-center shrink-0 shadow-md">
              <MapPin className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <h3 className="font-bold text-brand tracking-wide">
                ENDEREÇO PRINCIPAL
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mt-0.5">
                Morada Nova, RN - Brasil
                <br />
                Centro de Treinamento (CT) - AEC Morada Nova
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center shrink-0 shadow-md">
              <Clock className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <h3 className="font-bold text-secondary tracking-wide">
                HORÁRIO DE FUNCIONAMENTO
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mt-0.5">
                Segunda a Sexta: 08:00 - 18:00
                <br />
                Sábado: 08:00 - 12:00
              </p>
            </div>
          </div>
          <div className="pt-2">
            <a
              href="https://maps.app.goo.gl/QcZJ64eZzP4gQ5J38"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brand text-brand-foreground px-6 py-3.5 rounded-xl font-semibold shadow-md transition-all duration-300 hover:opacity-90 hover:scale-[1.02]"
            >
              <Navigation className="w-5 h-5" />
              COMO CHEGAR
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

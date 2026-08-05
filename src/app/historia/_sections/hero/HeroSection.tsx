import { Button } from "@/src/components/shared/Button";

export function HeroSection() {
  return (
    <div>
      <section className="bg-cover bg-center bg-no-repeat w-full min-h-screen flex flex-col justify-center px-6 py-12 text-brand-foreground" style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(30, 58, 138, 0.7), rgba(10, 37, 79, 0.95)), url('/hero-logo.jpeg')",
      }}>
        <div className="max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold md:text-6xl tracking-tight">
            NOSSA HISTÓRIA
          </h1>
          <p className="text-lg text-footerTitle leading-relaxed text-center font-bold">
            TRADIÇÃO, RAÇA E CORAÇÃO
          </p>

        </div>
      </section>
    </div>
  );
}

import Image from "next/image";

export default function Hero() {
  const whatsappLink = `https://wa.me/5519999999999?text=${encodeURIComponent(
    "Olá! Vim pelo site e gostaria de agendar uma consulta para noiva!",
  )}`;

  return (
    <section
      id="inicio"
      className="relative h-screen flex items-center justify-center pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&q=80"
          alt="Noiva com penteado elegante"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-primary/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-white mb-6 drop-shadow-lg">
          O penteado perfeito para o dia mais especial da sua vida
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white mb-8 drop-shadow-md">
          Especialistas em noivas, madrinhas e festas. Beleza que você vai
          lembrar para sempre.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-accent transition-all shadow-lg hover:shadow-xl"
          >
            Agendar Consulta
          </a>
          <a
            href="#galeria"
            className="bg-white/90 backdrop-blur-sm text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-white transition-all shadow-lg hover:shadow-xl"
          >
            Ver Portfólio
          </a>
        </div>

        {/* Social Proof */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-3xl mx-auto">
          <div className="bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-primary/20">
            <p className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold text-primary">
              +200
            </p>
            <p className="text-sm sm:text-base text-textSecondary">
              Noivas Atendidas
            </p>
          </div>
          <div className="bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-primary/20">
            <p className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold text-primary">
              8 anos
            </p>
            <p className="text-sm sm:text-base text-textSecondary">
              De Experiência
            </p>
          </div>
          <div className="bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-primary/20">
            <p className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold text-primary">
              100%
            </p>
            <p className="text-sm sm:text-base text-textSecondary">
              Satisfação
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <a href="#sobre" className="animate-bounce block">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
}

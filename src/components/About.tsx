export default function About() {
  const features = [
    {
      title: "Atendimento Exclusivo",
      description:
        "Horário dedicado só para você, sem pressa e com total atenção aos detalhes",
    },
    {
      title: "Prova de Penteado",
      description:
        "Teste seu penteado antes do grande dia e ajuste até ficar perfeito",
    },
    {
      title: "Produtos Premium",
      description:
        "Utilizamos apenas produtos de alta qualidade para garantir durabilidade",
    },
    {
      title: "Pontualidade Garantida",
      description:
        "Respeitamos seu cronograma. Você pode confiar no nosso compromisso",
    },
  ];

  return (
    <section id="sobre" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-textDark mb-6">
            Sobre Nós
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-textSecondary max-w-3xl mx-auto leading-relaxed">
            Somos especialistas em transformar o sonho da noiva em realidade.
            Com mais de 8 anos de experiência, cada detalhe é pensado para que
            você se sinta única e deslumbrante no seu grande dia.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-offwhite p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center border border-primary/20"
            >
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-accent"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-xl font-playfair font-bold text-textDark mb-3">
                {feature.title}
              </h3>
              <p className="text-textSecondary">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Services() {
  const whatsappLink = (service: string, price: string) =>
    `https://wa.me/5519999999999?text=${encodeURIComponent(
      `Olá! Gostaria de agendar: ${service} - ${price}`,
    )}`;

  const services = [
    {
      title: "Penteado de Noiva",
      price: "R$ 350",
      features: [
        "Consulta prévia incluída",
        "Prova de penteado",
        "Acessórios adaptados",
        "Duração de 1h30",
      ],
      popular: false,
    },
    {
      title: "Maquiagem de Noiva",
      price: "R$ 400",
      features: [
        "Teste de maquiagem",
        "Produtos premium",
        "Longa duração",
        "Cílios postiços inclusos",
      ],
      popular: false,
    },
    {
      title: "Pacote Noiva Completo",
      price: "R$ 700",
      features: [
        "Penteado + Maquiagem",
        "Prova completa",
        "Desconto especial",
        "Atendimento prioritário",
      ],
      popular: true,
    },
    {
      title: "Penteado de Madrinha",
      price: "R$ 180",
      features: [
        "Penteado elaborado",
        "Harmonização com a noiva",
        "Duração de 1h",
        "Produtos de qualidade",
      ],
      popular: false,
    },
    {
      title: "Maquiagem de Madrinha",
      price: "R$ 200",
      features: [
        "Maquiagem personalizada",
        "Produtos premium",
        "Acabamento profissional",
        "Longa duração",
      ],
      popular: false,
    },
    {
      title: "Pacote Madrinha Completo",
      price: "R$ 350",
      features: [
        "Penteado + Maquiagem",
        "Economia de R$ 30",
        "Visual harmonioso",
        "Atendimento ágil",
      ],
      popular: false,
    },
  ];

  return (
    <section id="servicos" className="py-20 px-4 sm:px-6 lg:px-8 bg-offwhite">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-textDark mb-6">
            Nossos Serviços
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-textSecondary max-w-3xl mx-auto">
            Pacotes especiais para tornar seu dia ainda mais especial
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative bg-surface rounded-lg shadow-lg hover:shadow-2xl transition-all p-8 border ${
                service.popular
                  ? "border-accent lg:scale-105"
                  : "border-primary/20"
              }`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent text-textDark px-4 py-1 rounded-full text-sm font-semibold">
                    Mais Procurado
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-playfair font-bold text-textDark mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-4xl font-bold text-accent text-center mb-6">
                {service.price}
              </p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-textSecondary">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={whatsappLink(service.title, service.price)}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center py-3 rounded-full font-semibold transition-all ${
                  service.popular
                    ? "bg-accent text-textDark hover:bg-primary hover:text-surface"
                    : "bg-primary text-surface hover:bg-accent hover:text-textDark"
                }`}
              >
                Agendar
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

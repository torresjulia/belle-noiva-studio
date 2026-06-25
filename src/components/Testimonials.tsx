import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Mariana Silva",
      date: "Casamento em Março 2024",
      text: "O Belle Noiva Studio fez o penteado dos meus sonhos! Fiquei linda e confiante o dia todo. A prova prévia foi essencial para deixar tudo perfeito. Super recomendo!",
      avatar:
        "https://ui-avatars.com/api/?name=Mariana+Silva&background=f4a7b9&color=fff&size=128",
    },
    {
      name: "Juliana Santos",
      date: "Casamento em Dezembro 2023",
      text: "Atendimento impecável! A maquiagem durou o dia todo e noite toda, mesmo com lágrimas de emoção. Me senti a noiva mais linda do mundo. Gratidão eterna!",
      avatar:
        "https://ui-avatars.com/api/?name=Juliana+Santos&background=f4a7b9&color=fff&size=128",
    },
    {
      name: "Amanda Oliveira",
      date: "Casamento em Junho 2024",
      text: "Fechei o pacote completo para mim e minhas madrinhas. Todas ficaram deslumbrantes! O profissionalismo e carinho da equipe fazem toda diferença. Valeu cada centavo!",
      avatar:
        "https://ui-avatars.com/api/?name=Amanda+Oliveira&background=f4a7b9&color=fff&size=128",
    },
    {
      name: "Fernanda Costa",
      date: "Casamento em Setembro 2023",
      text: "Pontualidade, qualidade e atenção aos detalhes. O Belle Noiva Studio superou todas as minhas expectativas. Meu penteado estava perfeito nas fotos e me senti maravilhosa!",
      avatar:
        "https://ui-avatars.com/api/?name=Fernanda+Costa&background=f4a7b9&color=fff&size=128",
    },
  ];

  return (
    <section id="depoimentos" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-textDark mb-6">
            O Que Nossas Noivas Dizem
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-textSecondary max-w-3xl mx-auto">
            Depoimentos reais de noivas que confiaram em nós para o dia mais
            especial
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-offwhite p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-primary/20"
            >
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-accent fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-textSecondary mb-6 italic leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author Info */}
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-textDark">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-textSecondary">
                    {testimonial.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { useState } from "react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      url: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800&q=80",
      alt: "Penteado de noiva elegante com flores",
    },
    {
      url: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=800&q=80",
      alt: "Maquiagem de noiva natural e sofisticada",
    },
    {
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
      alt: "Penteado clássico para casamento",
    },
    {
      url: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800&q=80",
      alt: "Noiva com penteado romântico",
    },
    {
      url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80",
      alt: "Maquiagem e penteado de madrinha",
    },
    {
      url: "https://images.unsplash.com/photo-1529634597689-42e19c94c732?w=800&q=80",
      alt: "Penteado preso elaborado",
    },
  ];

  return (
    <section id="galeria" className="py-20 px-4 sm:px-6 lg:px-8 bg-offwhite">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-textDark mb-6">
            Nosso Portfólio
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-textSecondary max-w-3xl mx-auto">
            Veja alguns dos nossos trabalhos e inspire-se para o seu grande dia
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg shadow-lg cursor-pointer group"
              onClick={() => setSelectedImage(image.url)}
            >
              <Image
                src={image.url}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/70 transition-all duration-300 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-surface opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-textDark/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-accent hover:text-surface transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Fechar"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full">
            <Image
              src={selectedImage}
              alt="Imagem ampliada"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}

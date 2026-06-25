# 🌟 Guia de Funcionalidades Extras

Este guia mostra como adicionar funcionalidades extras ao seu site.

## 📩 Formulário de Contato (sem backend)

### Usando Formspree (Gratuito)

1. Criar conta em [formspree.io](https://formspree.io)
2. Criar novo formulário
3. Copiar o endpoint fornecido

Adicionar em `src/components/Contact.tsx`:

```tsx
<form
  action="https://formspree.io/f/SEU_ID"
  method="POST"
  className="space-y-4"
>
  <input
    type="text"
    name="nome"
    placeholder="Seu nome"
    required
    className="w-full px-4 py-3 rounded-lg border border-nude focus:border-rose"
  />
  <input
    type="email"
    name="email"
    placeholder="Seu e-mail"
    required
    className="w-full px-4 py-3 rounded-lg border border-nude focus:border-rose"
  />
  <input
    type="tel"
    name="telefone"
    placeholder="Seu telefone"
    className="w-full px-4 py-3 rounded-lg border border-nude focus:border-rose"
  />
  <textarea
    name="mensagem"
    rows={4}
    placeholder="Sua mensagem"
    required
    className="w-full px-4 py-3 rounded-lg border border-nude focus:border-rose"
  />
  <button
    type="submit"
    className="w-full bg-rose text-white py-3 rounded-lg hover:bg-rose/90"
  >
    Enviar Mensagem
  </button>
</form>
```

## 📅 Sistema de Agendamento Online

### Usando Calendly

1. Criar conta em [calendly.com](https://calendly.com)
2. Configurar disponibilidade
3. Obter link de agendamento

Adicionar botão de agendamento:

```tsx
<a
  href="https://calendly.com/seunome/consulta-noiva"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-rose text-white px-8 py-4 rounded-full"
>
  Agendar Horário
</a>
```

## 📸 Instagram Feed

### Usando API do Instagram

Instalar biblioteca:

```bash
npm install react-instagram-embed
```

Criar componente `InstagramFeed.tsx`:

```tsx
import { InstagramEmbed } from "react-instagram-embed";

export default function InstagramFeed() {
  const posts = ["URL_DO_POST_1", "URL_DO_POST_2", "URL_DO_POST_3"];

  return (
    <section className="py-20">
      <h2 className="text-4xl font-playfair text-center mb-12">
        Siga no Instagram
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((url, index) => (
          <InstagramEmbed key={index} url={url} />
        ))}
      </div>
    </section>
  );
}
```

## 💬 Chat Online (Tawk.to)

1. Criar conta em [tawk.to](https://www.tawk.to)
2. Copiar código do widget
3. Adicionar em `src/app/layout.tsx` antes de `</body>`:

```tsx
<Script id="tawk-to" strategy="lazyOnload">
  {`
    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    (function(){
      var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
      s1.async=true;
      s1.src='https://embed.tawk.to/SEU_ID/default';
      s1.charset='UTF-8';
      s1.setAttribute('crossorigin','*');
      s0.parentNode.insertBefore(s1,s0);
    })();
  `}
</Script>
```

## 🎥 Vídeo no Hero

Substituir imagem por vídeo em `src/components/Hero.tsx`:

```tsx
<div className="absolute inset-0 z-0">
  <video autoPlay loop muted playsInline className="w-full h-full object-cover">
    <source src="/video-hero.mp4" type="video/mp4" />
  </video>
  <div className="absolute inset-0 bg-rose/30"></div>
</div>
```

## 📊 Google Analytics 4

Instalar:

```bash
npm install @next/third-parties
```

Em `src/app/layout.tsx`:

```tsx
import { GoogleAnalytics } from "@next/third-parties/google";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="G-SEU_ID" />
      </body>
    </html>
  );
}
```

## 🎨 Animações com Framer Motion

Instalar:

```bash
npm install framer-motion
```

Exemplo em componente:

```tsx
"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Conteúdo */}
    </motion.section>
  );
}
```

## 🌐 Modo Multi-idioma

Instalar:

```bash
npm install next-intl
```

Configurar conforme [documentação](https://next-intl-docs.vercel.app/)

## 🔍 Busca de Serviços

Criar componente `ServiceSearch.tsx`:

```tsx
"use client";
import { useState } from "react";

export default function ServiceSearch({ services }) {
  const [search, setSearch] = useState("");

  const filtered = services.filter((s) =>
    s.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar serviço..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-4 py-3 rounded-lg border"
      />
      {/* Renderizar filtered */}
    </div>
  );
}
```

## 🎁 Seção de Promoções

Criar `src/components/Promotions.tsx`:

```tsx
export default function Promotions() {
  return (
    <section className="py-20 bg-rose/10">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-4xl font-playfair font-bold mb-6">
          Promoção Especial
        </h2>
        <p className="text-xl mb-4">
          15% de desconto para noivas que fecharem até Dezembro!
        </p>
        <p className="text-brown/80 mb-8">Use o cupom: NOIVA15</p>
        <a
          href="#contato"
          className="inline-block bg-rose text-white px-8 py-4 rounded-full"
        >
          Aproveitar Desconto
        </a>
      </div>
    </section>
  );
}
```

## 📱 Botão de Compartilhamento

Criar `ShareButton.tsx`:

```tsx
"use client";

export default function ShareButton() {
  const share = async () => {
    if (navigator.share) {
      await navigator.share({
        title: "Belle Noiva Studio",
        text: "Conheça o melhor salão para noivas!",
        url: window.location.href,
      });
    }
  };

  return (
    <button
      onClick={share}
      className="bg-rose text-white px-6 py-3 rounded-full"
    >
      Compartilhar
    </button>
  );
}
```

## 💳 Pagamento Online (Stripe)

Instalar:

```bash
npm install @stripe/stripe-js
```

Configurar conforme [documentação do Stripe](https://stripe.com/docs/payments/accept-a-payment)

## 🎯 FAQ (Perguntas Frequentes)

Criar `src/components/FAQ.tsx`:

```tsx
"use client";
import { useState } from "react";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    {
      q: "Quanto tempo antes devo agendar?",
      a: "Recomendamos agendar com 3-6 meses de antecedência.",
    },
    {
      q: "Vocês atendem em domicílio?",
      a: "Sim, atendemos no salão ou no local do casamento.",
    },
    // ... mais perguntas
  ];

  return (
    <section className="py-20">
      <h2 className="text-4xl font-playfair text-center mb-12">
        Perguntas Frequentes
      </h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md">
            <button
              onClick={() => setOpen(open === index ? null : index)}
              className="w-full text-left p-6 font-semibold"
            >
              {faq.q}
            </button>
            {open === index && (
              <div className="px-6 pb-6 text-brown/80">{faq.a}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
```

## 📍 Mapa Interativo (Mapbox)

Alternativa ao Google Maps com mais customização:

```bash
npm install react-map-gl
```

Configurar conforme [documentação](https://visgl.github.io/react-map-gl/)

## 🎨 Theme Switcher (Claro/Escuro)

Usar `next-themes`:

```bash
npm install next-themes
```

Configurar tema escuro no `tailwind.config.ts` e criar toggle.

## 🔔 Notificações Push

Usar serviços como:

- OneSignal
- Firebase Cloud Messaging
- Pusher

## 📈 A/B Testing

Usar:

- Google Optimize
- Vercel Edge Config
- Next.js Middleware

## 🎭 Loading States e Skeletons

Criar componentes de loading para melhor UX durante carregamento de imagens/dados.

---

## 💡 Dicas de Implementação

1. **Sempre teste localmente primeiro** (`npm run dev`)
2. **Faça backup antes de grandes mudanças**
3. **Implemente uma funcionalidade por vez**
4. **Teste em mobile após cada mudança**
5. **Verifique o build de produção** (`npm run build`)

## 🆘 Precisa de Ajuda?

- Documentação do Next.js: https://nextjs.org/docs
- Comunidade Next.js: https://github.com/vercel/next.js/discussions
- Stack Overflow: https://stackoverflow.com/questions/tagged/next.js

---

✨ **Boas implementações!**

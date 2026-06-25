# 🎨 Guia de Personalização

Este guia mostra como personalizar o site do Belle Noiva Studio para o seu negócio.

## 📱 Informações de Contato

### WhatsApp

Procure e substitua `5519999999999` pelo seu número no formato internacional:

**Formato correto:** `55` (Brasil) + `11` (DDD) + `999999999` (número)

**Arquivos para editar:**

- `src/components/Hero.tsx` (linha 5)
- `src/components/Navbar.tsx` (linha 15)
- `src/components/Contact.tsx` (linha 4)
- `src/components/WhatsAppButton.tsx` (linha 17)
- `src/components/Footer.tsx` (link do rodapé)

### Instagram

Substitua `@bellenoivastudio` pelo seu usuário:

**Arquivos:**

- `src/components/Contact.tsx`
- `src/components/Footer.tsx`

### Endereço

Edite em `src/components/Contact.tsx`:

```tsx
<p className="text-brown">Rua das Flores, 123 - Centro</p>
<p className="text-brown">São João da Boa Vista - SP</p>
<p className="text-brown">CEP: 13870-000</p>
```

### Mapa do Google

No `src/components/Contact.tsx`, substitua o src do iframe com seu endereço:

1. Acesse [Google Maps](https://maps.google.com)
2. Busque seu endereço
3. Clique em "Compartilhar" > "Incorporar mapa"
4. Copie o código e substitua a URL no iframe

## 🎨 Cores e Estilo

Edite o arquivo `tailwind.config.ts`:

```typescript
colors: {
  rose: "#f4a7b9",      // Cor principal (botões, destaques)
  nude: "#e8d5c4",      // Cor secundária
  offwhite: "#fdf8f5",  // Cor de fundo
  gold: "#c9a84c",      // Detalhes (estrelas, etc)
  brown: "#3d2b1f",     // Cor do texto
}
```

## 💰 Preços e Serviços

Edite o array `services` em `src/components/Services.tsx`:

```typescript
const services = [
  {
    title: "Nome do Serviço",
    price: "R$ 350",
    features: [
      "Característica 1",
      "Característica 2",
      "Característica 3",
      "Característica 4",
    ],
    popular: false, // true para destacar como "Mais Procurado"
  },
  // ... adicione mais serviços
];
```

## 📸 Imagens

### Hero (Imagem Principal)

Em `src/components/Hero.tsx`, linha 9:

```tsx
src = "https://images.unsplash.com/photo-XXXXXXX?w=1600&q=80";
```

Substitua por:

- Sua própria imagem hospedada
- Outra URL do Unsplash
- Arquivo local em `/public/images/hero.jpg` e use `src="/images/hero.jpg"`

### Galeria

Em `src/components/Gallery.tsx`, edite o array `images`:

```typescript
const images = [
  {
    url: "https://sua-imagem-1.jpg",
    alt: "Descrição da imagem 1",
  },
  {
    url: "https://sua-imagem-2.jpg",
    alt: "Descrição da imagem 2",
  },
  // ... adicione quantas quiser
];
```

**Dica:** Use imagens quadradas (aspect-ratio 1:1) para melhor resultado no grid.

## ⭐ Depoimentos

Edite o array `testimonials` em `src/components/Testimonials.tsx`:

```typescript
const testimonials = [
  {
    name: "Nome da Cliente",
    date: "Casamento em Mês Ano",
    text: "Depoimento completo da cliente sobre o serviço...",
    avatar:
      "https://ui-avatars.com/api/?name=Nome+Cliente&background=f4a7b9&color=fff&size=128",
  },
  // ... adicione mais depoimentos
];
```

**Dica:** O avatar é gerado automaticamente. Basta mudar o nome no parâmetro `name=`.

## 📝 Textos e Conteúdo

### Título Principal (Hero)

`src/components/Hero.tsx`:

```tsx
<h1>O penteado perfeito para o dia mais especial da sua vida</h1>
```

### Sobre o Salão

`src/components/About.tsx`:

```tsx
<p>Somos especialistas em transformar o sonho da noiva em realidade...</p>
```

### Números de Prova Social

`src/components/Hero.tsx`:

```tsx
<p>+200</p>
<p>Noivas Atendidas</p>
```

Altere os números conforme seu negócio.

## 🔍 SEO (Otimização para Google)

Edite `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Seu Título | Palavras-chave importantes",
  description: "Descrição do seu salão com palavras-chave relevantes...",
  keywords: "suas, palavras, chave, aqui",
};
```

## 🎨 Logo

Substitua o texto do logo por uma imagem em `src/components/Navbar.tsx`:

```tsx
// Ao invés de:
<h1 className="text-2xl">Belle Noiva Studio</h1>

// Use:
<Image src="/logo.png" alt="Belle Noiva Studio" width={200} height={60} />
```

E adicione seu logo em `/public/logo.png`

## 🎭 Fontes

Para mudar as fontes, edite `src/app/layout.tsx`:

```typescript
import { Playfair_Display, Lato } from "next/font/google";

// Substitua por outras fontes do Google Fonts:
import { Montserrat, Open_Sans } from "next/font/google";
```

Veja todas as fontes disponíveis em: [Google Fonts](https://fonts.google.com)

## ⏰ Horário de Funcionamento

Em `src/components/Contact.tsx`:

```tsx
<p className="text-brown">Segunda a Sábado</p>
<p className="text-brown">08:00 - 19:00</p>
```

## 📱 Favicon

Substitua `/public/favicon.ico` pela sua própria icon.

**Dica:** Use geradores online como [Favicon.io](https://favicon.io/) para criar seu favicon.

## 🎯 Dicas Importantes

1. **Imagens**: Use imagens otimizadas (WebP ou JPG comprimido) para melhor performance
2. **Alt text**: Sempre preencha o atributo `alt` das imagens para acessibilidade e SEO
3. **Teste mobile**: Sempre teste em celular depois das mudanças
4. **Backup**: Faça backup dos arquivos antes de grandes mudanças
5. **WhatsApp**: Teste o link do WhatsApp para garantir que está funcionando

## 🚀 Após Personalizar

1. Salve todos os arquivos
2. O servidor de desenvolvimento recarrega automaticamente
3. Teste todas as funcionalidades
4. Faça o build de produção: `npm run build`
5. Faça o deploy na Vercel

---

✨ Qualquer dúvida, consulte o README.md ou a documentação do Next.js

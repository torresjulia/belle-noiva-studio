# 💒 Belle Noiva Studio

Landing page completa e responsiva para salão de beleza especializado em noivas, desenvolvida com Next.js 15, TypeScript e Tailwind CSS.

## ✨ Características

- **Design Sofisticado e Acolhedor**: Paleta de cores clara e elegante com tons terrosos e dourados
- **Totalmente Responsivo**: Mobile-first design para perfeita visualização em todos os dispositivos
- **Performance Otimizada**: Built com Next.js 15 App Router e otimizações de imagem
- **SEO Otimizado**: Metadata configurada para melhor indexação
- **Integração WhatsApp**: Botões de call-to-action diretos para agendamento
- **Fontes Elegantes**: Google Fonts (Playfair Display + Lato)

## 🎨 Paleta de Cores

- **Off-White**: `#fdf8f5` - Background principal (quente e acolhedor)
- **Surface**: `#ffffff` - Cards e superfícies (branco puro)
- **Terracota**: `#7c4d2f` - Cor primária (sofisticado)
- **Dourado**: `#c9a84c` - Detalhes e hovers
- **Marrom Escuro**: `#2d1f14` - Texto principal
- **Marrom Médio**: `#8c6e5a` - Texto secundário

## 📋 Seções

1. **Hero**: Imagem de impacto com call-to-action e prova social
2. **Sobre**: Apresentação do salão e diferenciais
3. **Serviços**: Pacotes com preços e detalhes
4. **Galeria**: Grid de fotos dos trabalhos realizados
5. **Depoimentos**: Avaliações reais de clientes
6. **Contato**: Informações, mapa e formulário de contato
7. **Footer**: Links rápidos e redes sociais
8. **Botão WhatsApp Flutuante**: Fixo para fácil acesso

## 🚀 Começando

### Pré-requisitos

- Node.js 18+ instalado
- npm, yarn, pnpm ou bun

### Instalação

```bash
# Instalar dependências
npm install
# ou
yarn install
# ou
pnpm install
```

### Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador para ver o resultado.

### Build para Produção

```bash
# Criar build de produção
npm run build
# ou
yarn build

# Iniciar servidor de produção
npm start
# ou
yarn start
```

## 📦 Tecnologias Utilizadas

- **Next.js 15**: Framework React com App Router
- **TypeScript**: Tipagem estática
- **Tailwind CSS**: Estilização utility-first
- **Google Fonts**: Playfair Display + Lato
- **Unsplash**: Imagens de alta qualidade

## 📱 Deploy

### Vercel (Recomendado)

A forma mais fácil de fazer deploy é usando a [Vercel](https://vercel.com):

1. Faça push do código para um repositório Git (GitHub, GitLab, Bitbucket)
2. Importe o projeto na Vercel
3. A Vercel detectará automaticamente Next.js e configurará o build
4. Seu site estará no ar em minutos!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## 📞 Personalização

Para personalizar para seu negócio:

1. **Informações de Contato**: Edite o número de WhatsApp e dados de contato em:
   - `src/components/Hero.tsx`
   - `src/components/Navbar.tsx`
   - `src/components/Contact.tsx`
   - `src/components/WhatsAppButton.tsx`

2. **Serviços e Preços**: Edite o array `services` em `src/components/Services.tsx`

3. **Imagens**: Substitua as URLs do Unsplash por suas próprias imagens em:
   - `src/components/Hero.tsx`
   - `src/components/Gallery.tsx`

4. **Cores**: Ajuste a paleta no arquivo `tailwind.config.ts`

5. **SEO**: Atualize o metadata em `src/app/layout.tsx`

## 📄 Licença

Este projeto está sob a licença MIT.

## 🤝 Contato

Belle Noiva Studio

WhatsApp: (19) 99999-9999

---

Desenvolvido com 💖 por [jt-studio](https://github.com/torresjulia) para transformar sonhos em realidade

# 📁 Estrutura do Projeto

```
belle-noiva-studio/
│
├── 📁 public/                      # Arquivos estáticos
│   └── favicon.ico                 # Ícone do site
│
├── 📁 src/
│   ├── 📁 app/                     # App Router do Next.js 15
│   │   ├── globals.css             # Estilos globais com Tailwind
│   │   ├── layout.tsx              # Layout principal (Navbar + WhatsApp)
│   │   └── page.tsx                # Página inicial (home)
│   │
│   └── 📁 components/              # Componentes React
│       ├── About.tsx               # Seção "Sobre Nós"
│       ├── Contact.tsx             # Seção "Contato" com mapa
│       ├── Footer.tsx              # Rodapé com links
│       ├── Gallery.tsx             # Galeria de fotos
│       ├── Hero.tsx                # Seção Hero (topo)
│       ├── Navbar.tsx              # Menu de navegação
│       ├── Services.tsx            # Serviços e preços
│       ├── Testimonials.tsx        # Depoimentos de clientes
│       └── WhatsAppButton.tsx      # Botão flutuante do WhatsApp
│
├── 📁 .vscode/                     # Configurações do VS Code
│   └── settings.json
│
├── .env.example                    # Exemplo de variáveis de ambiente
├── .eslintrc.json                  # Configuração do ESLint
├── .gitignore                      # Arquivos ignorados pelo Git
├── next.config.ts                  # Configuração do Next.js
├── package.json                    # Dependências do projeto
├── postcss.config.mjs              # Configuração do PostCSS
├── tailwind.config.ts              # Configuração do Tailwind CSS
├── tsconfig.json                   # Configuração do TypeScript
│
├── 📄 README.md                    # Documentação principal
├── 📄 INSTALL.md                   # Guia de instalação
├── 📄 CUSTOMIZATION.md             # Guia de personalização
└── 📄 PROJECT_STRUCTURE.md         # Este arquivo
```

## 🎯 Funcionalidades por Componente

### 🏠 **layout.tsx** (Root Layout)

- Importa fontes do Google (Playfair Display + Lato)
- Configuração de SEO (metadata)
- Inclui Navbar e WhatsAppButton globalmente
- Renderiza o conteúdo da página ({children})

### 📄 **page.tsx** (Home Page)

- Importa e organiza todas as seções
- Hero → About → Services → Gallery → Testimonials → Contact → Footer

### 🎨 **Navbar.tsx**

- Menu responsivo com hamburger no mobile
- Links de navegação suave (anchor)
- Botão de CTA para WhatsApp
- Efeito de scroll (background muda ao rolar)

### 🌟 **Hero.tsx**

- Imagem de fundo do Unsplash
- Overlay rosé suave
- Títulos impactantes
- 2 CTAs (Agendar + Ver Portfólio)
- Prova social (números)
- Indicador de scroll animado

### ℹ️ **About.tsx**

- Texto de apresentação
- 4 cards de diferenciais
- Layout em grid responsivo

### 💼 **Services.tsx**

- 6 cards de serviços com preços
- Destaque no "Mais Procurado"
- Features com checkmarks
- Botão de agendamento por serviço

### 🖼️ **Gallery.tsx**

- Grid de 6 fotos (3 colunas desktop)
- Efeito hover com zoom
- Modal lightbox ao clicar
- Responsivo (2 cols tablet, 1 col mobile)

### 💬 **Testimonials.tsx**

- 4 depoimentos de clientes
- Avatar gerado automaticamente
- 5 estrelas de avaliação
- Layout em 2 colunas

### 📞 **Contact.tsx**

- Informações de contato
- Ícones customizados
- Mapa do Google Maps incorporado
- Botão principal de CTA
- Layout 2 colunas (info + mapa)

### 🟢 **WhatsAppButton.tsx**

- Botão fixo flutuante
- Aparece após scroll de 300px
- Animação suave
- Ícone SVG do WhatsApp

### 🦶 **Footer.tsx**

- Logo e descrição
- Links rápidos
- Redes sociais
- Copyright

## 🎨 Sistema de Design

### Cores (Tailwind)

```css
rose:     #f4a7b9  → bg-rose, text-rose, border-rose
nude:     #e8d5c4  → bg-nude
offwhite: #fdf8f5  → bg-offwhite
gold:     #c9a84c  → text-gold
brown:    #3d2b1f  → text-brown
```

### Tipografia

```css
Títulos:  font-playfair (Playfair Display)
Corpo:    font-lato (Lato)
```

### Espaçamento

```css
Seções:   py-20 (padding vertical)
Container: max-w-7xl mx-auto
```

### Responsividade

```css
Mobile:  Padrão
Tablet:  md: (768px+)
Desktop: lg: (1024px+)
```

## 🔗 Links Importantes

- **Next.js 15**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **TypeScript**: https://www.typescriptlang.org/docs
- **Google Fonts**: https://fonts.google.com
- **Unsplash**: https://unsplash.com
- **Vercel Deploy**: https://vercel.com

## 📦 Dependências Principais

| Pacote       | Versão | Uso              |
| ------------ | ------ | ---------------- |
| next         | 15.1.0 | Framework React  |
| react        | 19.0.0 | Biblioteca UI    |
| typescript   | 5.x    | Tipagem estática |
| tailwindcss  | 3.4.x  | Estilização      |
| autoprefixer | 10.4.x | Prefixos CSS     |

## 🚀 Comandos Rápidos

```bash
# Desenvolvimento
npm run dev          # Inicia servidor local

# Produção
npm run build        # Cria build otimizada
npm start            # Serve build de produção

# Qualidade
npm run lint         # Verifica erros de código
```

## ✅ Features Implementadas

- [x] Design responsivo (mobile-first)
- [x] Next.js 15 App Router
- [x] TypeScript configurado
- [x] Tailwind CSS
- [x] Google Fonts
- [x] SEO básico
- [x] Imagens do Unsplash
- [x] Integração WhatsApp
- [x] Menu responsivo
- [x] Smooth scroll
- [x] Lightbox na galeria
- [x] Botão flutuante do WhatsApp
- [x] Mapa do Google Maps
- [x] Prova social
- [x] Depoimentos
- [x] Deploy-ready para Vercel

## 🎯 Próximos Passos

1. ✅ Instalar dependências (`npm install`)
2. ✅ Rodar em dev (`npm run dev`)
3. 🔧 Personalizar (ver CUSTOMIZATION.md)
4. 📸 Adicionar suas próprias imagens
5. 🧪 Testar em diferentes dispositivos
6. 🚀 Deploy na Vercel

---

📚 Para mais informações, consulte os outros arquivos .md do projeto!

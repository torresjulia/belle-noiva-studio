# 📦 Guia de Instalação - Belle Noiva Studio

## Passo a Passo para Rodar o Projeto

### 1️⃣ Pré-requisitos

Certifique-se de ter instalado:

- **Node.js 18+** ([Download aqui](https://nodejs.org/))
- **npm** (vem com Node.js) ou **yarn** ou **pnpm**
- **Git** (opcional, para clonar o repositório)

Para verificar se está instalado:

```bash
node --version
npm --version
```

### 2️⃣ Instalar Dependências

No diretório do projeto, execute:

```bash
npm install
```

Ou se preferir yarn:

```bash
yarn install
```

Ou pnpm:

```bash
pnpm install
```

Isso irá instalar todas as dependências necessárias listadas no `package.json`:

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- E outras dependências de desenvolvimento

### 3️⃣ Iniciar o Servidor de Desenvolvimento

```bash
npm run dev
```

Ou:

```bash
yarn dev
```

O servidor iniciará em **http://localhost:3000**

Abra seu navegador e acesse essa URL para ver o site funcionando! 🎉

### 4️⃣ Desenvolvimento

O servidor de desenvolvimento possui:

- ✅ Hot reload (atualização automática ao salvar arquivos)
- ✅ Fast refresh (mantém o estado do React ao editar)
- ✅ TypeScript checking em tempo real
- ✅ Tailwind CSS compilation automática

### 5️⃣ Build para Produção (Opcional)

Para criar uma versão otimizada para produção:

```bash
npm run build
```

E para testar a versão de produção localmente:

```bash
npm start
```

## 🚀 Deploy na Vercel

A forma mais rápida de colocar online:

1. Crie uma conta em [vercel.com](https://vercel.com)
2. Instale a CLI da Vercel (opcional):
   ```bash
   npm i -g vercel
   ```
3. No diretório do projeto, execute:
   ```bash
   vercel
   ```
4. Siga as instruções na tela
5. Pronto! Seu site está online! 🎉

Ou faça upload direto pelo site da Vercel conectando seu repositório Git.

## 🔧 Personalização Rápida

### Alterar Número do WhatsApp

Procure por `5519999999999` nos arquivos e substitua pelo seu número no formato internacional (sem espaços ou caracteres especiais):

```bash
# Arquivos que contêm o número:
src/components/Hero.tsx
src/components/Navbar.tsx
src/components/Contact.tsx
src/components/WhatsAppButton.tsx
```

### Alterar Cores

Edite o arquivo `tailwind.config.ts`:

```typescript
colors: {
  rose: "#f4a7b9",    // Sua cor principal
  nude: "#e8d5c4",    // Cor secundária
  offwhite: "#fdf8f5", // Background
  gold: "#c9a84c",     // Detalhes
  brown: "#3d2b1f",    // Texto
}
```

### Alterar Preços e Serviços

Edite o arquivo `src/components/Services.tsx` no array `services`.

### Trocar Imagens

Substitua as URLs do Unsplash por suas próprias imagens nos componentes:

- `src/components/Hero.tsx`
- `src/components/Gallery.tsx`

## ❗ Problemas Comuns

### Erro: "Cannot find module"

```bash
# Deletar node_modules e reinstalar
rm -rf node_modules
npm install
```

### Porta 3000 já está em uso

```bash
# Usar outra porta
npm run dev -- -p 3001
```

### Erros de TypeScript

```bash
# Verificar erros
npm run build
```

## 📞 Suporte

Se encontrar problemas:

1. Verifique se o Node.js 18+ está instalado
2. Delete `node_modules` e `.next` e reinstale
3. Veja a documentação do [Next.js](https://nextjs.org/docs)

---

✨ Desenvolvido com carinho para o Belle Noiva Studio

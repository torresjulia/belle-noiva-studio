# ⚡ Quick Start - Belle Noiva Studio

Guia rápido de 5 minutos para começar!

## 🚀 1. Instalação (2 minutos)

```bash
# Entre no diretório do projeto
cd belle-noiva-studio

# Instale as dependências
npm install

# Inicie o servidor
npm run dev
```

✅ Abra http://localhost:3000 — Pronto! O site está rodando!

## 🎨 2. Personalização Básica (3 minutos)

### Alterar WhatsApp (IMPORTANTE!)

Procure `5519999999999` e substitua por seu número:

**Arquivos (4 no total):**

- `src/components/Hero.tsx`
- `src/components/Navbar.tsx`
- `src/components/Contact.tsx`
- `src/components/WhatsAppButton.tsx`

**Formato:** `55` + `DDD` + `Número` (sem espaços)
**Exemplo:** `5511987654321`

### Alterar Instagram

Procure `@bellenoivastudio` e substitua:

**Arquivos:**

- `src/components/Contact.tsx`
- `src/components/Footer.tsx`

### Alterar Cores

Edite `tailwind.config.ts`:

```typescript
colors: {
  rose: "#f4a7b9",      // Sua cor principal
  nude: "#e8d5c4",
  offwhite: "#fdf8f5",
  gold: "#c9a84c",
  brown: "#3d2b1f",
}
```

## 📸 3. Adicionar Suas Fotos

### Hero (Imagem Principal)

Substitua em `src/components/Hero.tsx`:

```tsx
src = "https://images.unsplash.com/photo-...";
```

Por:

```tsx
src = "/images/hero.jpg";
```

E adicione sua foto em: `/public/images/hero.jpg`

### Galeria

Edite o array `images` em `src/components/Gallery.tsx`

## 💰 4. Atualizar Preços

Edite `src/components/Services.tsx` no array `services`:

```typescript
{
  title: "Penteado de Noiva",
  price: "R$ 350",  // ← Altere aqui
  features: [...],
}
```

## 🚀 5. Deploy (5 minutos)

### Opção mais fácil: Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Clique em "New Project"
3. Conecte seu GitHub/GitLab
4. Importe este projeto
5. Clique em "Deploy"
6. Aguarde 2-3 minutos
7. ✅ Seu site está no ar!

## 📋 Checklist Mínimo

Antes de colocar online, certifique-se de:

- [ ] WhatsApp alterado
- [ ] Instagram alterado
- [ ] Preços atualizados
- [ ] Endereço correto em Contact
- [ ] Site testado em celular
- [ ] Build sem erros (`npm run build`)

## 📚 Documentação Completa

Para personalizações avançadas, consulte:

- **README.md** - Visão geral do projeto
- **INSTALL.md** - Instalação detalhada
- **CUSTOMIZATION.md** - Personalização completa
- **DEPLOY_CHECKLIST.md** - Checklist de deploy
- **PROJECT_STRUCTURE.md** - Estrutura do projeto
- **FEATURES_GUIDE.md** - Funcionalidades extras

## 🎯 Estrutura Simplificada

```
src/
├── app/
│   ├── layout.tsx     ← SEO, fontes, metadata
│   └── page.tsx       ← Página principal
│
└── components/
    ├── Navbar.tsx     ← Menu
    ├── Hero.tsx       ← Topo (imagem grande)
    ├── About.tsx      ← Sobre nós
    ├── Services.tsx   ← Serviços e preços
    ├── Gallery.tsx    ← Fotos
    ├── Testimonials.tsx ← Depoimentos
    ├── Contact.tsx    ← Contato e mapa
    ├── Footer.tsx     ← Rodapé
    └── WhatsAppButton.tsx ← Botão flutuante
```

## 🎨 Paleta de Cores

| Cor          | Hex     | Uso               |
| ------------ | ------- | ----------------- |
| 🌸 Rosé      | #f4a7b9 | Botões, destaques |
| 🏜️ Nude      | #e8d5c4 | Secundária        |
| ⬜ Off-white | #fdf8f5 | Background        |
| ✨ Dourado   | #c9a84c | Detalhes          |
| 🤎 Marrom    | #3d2b1f | Texto             |

## 💡 Comandos Úteis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor local (porta 3000)

# Produção
npm run build        # Cria versão otimizada
npm start            # Serve versão de produção

# Verificação
npm run lint         # Verifica erros de código
```

## 🆘 Problemas Comuns

### "Cannot find module"

```bash
rm -rf node_modules .next
npm install
```

### "Port 3000 already in use"

```bash
npm run dev -- -p 3001
```

### WhatsApp não abre

- Verifique o formato: `55` + `DDD` + `número`
- Sem espaços, parênteses ou traços
- Teste o link direto no navegador

## 📞 Links Úteis

- **Vercel**: https://vercel.com (deploy gratuito)
- **Unsplash**: https://unsplash.com (fotos gratuitas)
- **Google Fonts**: https://fonts.google.com
- **UI Avatars**: https://ui-avatars.com (avatares automáticos)

## ✅ Pronto para Começar!

1. ✅ `npm install`
2. ✅ `npm run dev`
3. ✅ Personalize WhatsApp e Instagram
4. ✅ Teste no navegador
5. ✅ Deploy na Vercel

---

## 🎉 Tudo Funcionando?

Parabéns! Seu site está pronto. Agora é só:

1. Compartilhar nas redes sociais
2. Adicionar link na bio do Instagram
3. Imprimir QR Code para cartões
4. Divulgar para clientes

**Boa sorte com seu negócio! 💐**

---

_Dúvidas? Veja os outros arquivos .md para informações detalhadas._

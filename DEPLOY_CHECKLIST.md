# 🚀 Checklist de Deploy

Use este checklist antes de fazer o deploy do seu site para produção.

## ✅ Pré-Deploy

### 1. Personalização Completa

- [ ] Número do WhatsApp alterado em todos os componentes
- [ ] Instagram @username atualizado
- [ ] Endereço físico correto
- [ ] Horário de funcionamento atualizado
- [ ] Mapa do Google com localização correta
- [ ] Preços dos serviços atualizados
- [ ] Textos personalizados (Hero, Sobre, etc)

### 2. Conteúdo Visual

- [ ] Logo do salão adicionado (se aplicável)
- [ ] Favicon personalizado (`/public/favicon.ico`)
- [ ] Imagem Hero substituída por foto real
- [ ] Galeria com fotos reais dos trabalhos
- [ ] Todas as imagens otimizadas (< 500KB cada)
- [ ] Alt text em todas as imagens

### 3. SEO

- [ ] Title atualizado em `src/app/layout.tsx`
- [ ] Description com palavras-chave relevantes
- [ ] Keywords relacionados ao seu negócio
- [ ] Meta tags Open Graph configuradas
- [ ] Favicon presente

### 4. Funcionalidades

- [ ] Todos os links do WhatsApp testados
- [ ] Links de navegação funcionando
- [ ] Smooth scroll funcionando
- [ ] Menu mobile abrindo e fechando
- [ ] Galeria lightbox funcionando
- [ ] Botão flutuante do WhatsApp aparecendo
- [ ] Mapa do Google Maps carregando

### 5. Responsividade

- [ ] Testado em mobile (< 768px)
- [ ] Testado em tablet (768px - 1024px)
- [ ] Testado em desktop (> 1024px)
- [ ] Todas as imagens carregando em todos os tamanhos
- [ ] Textos legíveis em todos os dispositivos

### 6. Performance

- [ ] Build de produção sem erros (`npm run build`)
- [ ] Sem warnings críticos no console
- [ ] Imagens otimizadas
- [ ] Sem recursos não utilizados

### 7. Testes de Navegadores

- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari (iOS e macOS)
- [ ] Chrome Mobile (Android)

## 🚀 Deploy na Vercel

### Opção 1: Via Interface (Recomendado)

1. [ ] Criar conta em [vercel.com](https://vercel.com)
2. [ ] Fazer push do código para GitHub/GitLab/Bitbucket
3. [ ] Clicar em "New Project" na Vercel
4. [ ] Importar seu repositório
5. [ ] Configurações detectadas automaticamente
6. [ ] Clicar em "Deploy"
7. [ ] Aguardar build (2-3 minutos)
8. [ ] Testar o site em produção

### Opção 2: Via CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# No diretório do projeto
vercel

# Seguir instruções na tela
# Deploy feito! 🎉
```

## 📋 Pós-Deploy

### 1. Testes em Produção

- [ ] Site carregando corretamente
- [ ] Todos os links funcionando
- [ ] WhatsApp abrindo com mensagem correta
- [ ] Imagens carregando
- [ ] Mapa funcionando
- [ ] Performance boa (< 3s de carregamento)

### 2. SEO e Indexação

- [ ] Enviar sitemap para Google Search Console
- [ ] Verificar propriedade do site
- [ ] Adicionar site no Google Meu Negócio
- [ ] Criar conta Instagram Business
- [ ] Linkar Instagram ao site

### 3. Analytics (Opcional)

- [ ] Configurar Google Analytics 4
- [ ] Configurar Facebook Pixel (se usar anúncios)
- [ ] Configurar Tag Manager (opcional)

### 4. Domínio Personalizado (Opcional)

Na Vercel:

1. [ ] Comprar domínio (ex: bellenoviastudio.com.br)
2. [ ] Ir em Settings > Domains
3. [ ] Adicionar domínio customizado
4. [ ] Configurar DNS conforme instruções
5. [ ] Aguardar propagação (até 48h)

## 🔧 Manutenção

### Semanalmente

- [ ] Verificar se site está online
- [ ] Responder mensagens do WhatsApp
- [ ] Atualizar galeria com novos trabalhos

### Mensalmente

- [ ] Verificar analytics
- [ ] Atualizar depoimentos
- [ ] Revisar preços se necessário
- [ ] Adicionar novidades/promoções

### Anualmente

- [ ] Renovar domínio
- [ ] Atualizar estatísticas (anos de experiência, clientes)
- [ ] Revisar design e conteúdo

## 🆘 Troubleshooting

### Site não carrega

1. Verificar status da Vercel
2. Ver logs de build na dashboard
3. Conferir se build local funciona

### Imagens não aparecem

1. Verificar URLs das imagens
2. Confirmar domínios em `next.config.ts`
3. Testar URLs no navegador

### WhatsApp não abre

1. Verificar formato do número: `5519999999999`
2. Testar link diretamente no navegador
3. Verificar se há espaços ou caracteres especiais

### Problemas de build

```bash
# Limpar cache e reinstalar
rm -rf .next node_modules
npm install
npm run build
```

## 📞 Suporte

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Comunidade**: https://github.com/vercel/next.js/discussions

## ✨ Checklist Final

Antes de considerar o projeto finalizado:

- [ ] ✅ Todos os itens de personalização concluídos
- [ ] ✅ Testado em múltiplos dispositivos
- [ ] ✅ Build de produção sem erros
- [ ] ✅ Deploy realizado com sucesso
- [ ] ✅ Site testado em produção
- [ ] ✅ WhatsApp funcionando perfeitamente
- [ ] ✅ SEO básico configurado
- [ ] ✅ Domínio configurado (se aplicável)

## 🎉 Parabéns!

Seu site está no ar! Agora é só divulgar:

- Compartilhar no Instagram
- Adicionar link na bio
- Compartilhar no status do WhatsApp
- Enviar para clientes
- Imprimir em cartões de visita

---

🚀 **Boa sorte com seu negócio!**

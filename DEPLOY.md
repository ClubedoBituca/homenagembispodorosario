# Deploy Guide - Arthur Bispo do Rosário

## ✅ Pré-Deploy Checklist

### Build Status

- ✅ Build passa sem erros
- ✅ Código morto removido (NavLink, assets não utilizados)
- ⚠️ Componentes UI não utilizados (podem ser removidos futuramente para otimização)

### Arquivos Importantes

- `dist/` - Build de produção
- `public/` - Assets estáticos (Manto frente.png, Manto verso.png)

## 🚀 Deploy Options

### Option 1: Vercel (Recomendado)

```bash
npm install -g vercel
vercel
```

### Option 2: Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Option 3: GitHub Pages

1. Adicione ao `vite.config.ts`:

```typescript
base: "/bispodorosario/";
```

2. Build e deploy:

```bash
npm run build
npx gh-pages -d dist
```

## 📦 Build de Produção

```bash
npm run build
```

**Output:**

- `dist/index.html` - 0.95 kB (gzip: 0.47 kB)
- `dist/assets/hero-bg-*.jpg` - 127.48 kB
- `dist/assets/index-*.css` - 67.01 kB (gzip: 11.87 kB)
- `dist/assets/index-*.js` - 449.71 kB (gzip: 145.50 kB)

## 🔍 Verificações Finais

### Antes do Deploy

- [ ] Testar build localmente: `npm run preview`
- [ ] Verificar imagens carregam corretamente
- [ ] Testar responsividade (mobile/tablet/desktop)
- [ ] Verificar animações funcionam
- [ ] Testar interação do Manto (clique para virar)

### Performance

- Bundle JS: 145.50 kB (gzipped) ✅
- CSS: 11.87 kB (gzipped) ✅
- Imagem hero: 127.48 kB ✅

## 🌐 URLs Externas Usadas

O site usa as seguintes URLs externas para imagens:

- IntroSection: Enciclopédia Itaú Cultural
- PillarsSection: O Globo Acervo, Bienal
- CatalogSection: Museu Bispo do Rosário, Arte Brasileiros

## 📝 Notas

- Site é 100% estático (sem backend)
- Todas as animações são client-side
- Imagens do manto estão em `/public`
- Componentes UI shadcn/ui incluídos mas não utilizados (podem ser removidos para otimização futura)

## 🐛 Troubleshooting

### Build falha

```bash
rm -rf node_modules dist
npm install
npm run build
```

### Imagens não carregam

- Verificar se `Manto frente.png` e `Manto verso.png` estão em `/public`
- Verificar URLs externas estão acessíveis

### Animações não funcionam

- Verificar se Framer Motion está instalado
- Limpar cache do navegador

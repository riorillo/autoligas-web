# AutoDreams - Concessionaria Auto

Un sito web moderno e responsive per una concessionaria auto, realizzato con Next.js e Tailwind CSS.

## Caratteristiche

- Design moderno e responsive
- Galleria di immagini configurabile
- Navigazione intuitiva
- Ottimizzato per SEO
- Performance elevate

## Requisiti

- Node.js 18.18.0 o superiore
- npm 9.x o superiore

## Installazione

1. Clona il repository:
```bash
git clone <repository-url>
cd auto-ligas-web
```

2. Installa le dipendenze:
```bash
npm install
```

3. Avvia il server di sviluppo:
```bash
npm run dev
```

4. Apri [http://localhost:3000](http://localhost:3000) nel tuo browser.

## Configurazione delle immagini

1. Aggiungi le immagini delle auto nella cartella `public/cars/`
2. Modifica l'array `featuredCars` in `src/app/page.tsx` per includere le tue immagini:

```typescript
const featuredCars = [
  {
    url: '/cars/tua-auto.jpg',
    alt: 'Descrizione Auto',
    title: 'Nome Auto - Anno'
  },
  // Aggiungi altre auto...
];
```

## Build per la produzione

Per creare una build ottimizzata per la produzione:

```bash
npm run build
```

## Struttura del progetto

```
auto-ligas-web/
├── src/
│   ├── app/
│   │   ├── page.tsx         # Homepage
│   │   └── layout.tsx       # Layout principale
│   └── components/
│       ├── Navbar.tsx       # Barra di navigazione
│       └── ImageGallery.tsx # Componente galleria immagini
├── public/
│   └── cars/               # Immagini delle auto
└── ...
```

## Personalizzazione

- Modifica i colori e lo stile in `tailwind.config.ts`
- Aggiorna i testi e le immagini in `src/app/page.tsx`
- Personalizza il layout in `src/app/layout.tsx`

## Licenza

MIT

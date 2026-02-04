# StreetfoodSpotter 🍔

Een moderne Next.js applicatie voor het ontdekken en delen van de beste streetfood spots in Nederland.

## ✨ Features

- 🗺️ **Spot Overzicht**: Bekijk alle streetfood spots in een overzichtelijk grid
- 🔍 **Zoekfunctie**: Zoek spots op naam of locatie
- ➕ **Spots Toevoegen**: Voeg nieuwe streetfood spots toe met afbeeldingen en media
- 📱 **Responsive Design**: Werkt perfect op desktop, tablet en mobiel
- 🎨 **Moderne UI**: Gebouwd met Tailwind CSS en mooie animaties
- 📍 **Media Integratie**: TikTok embeds en Google Maps links
- 💾 **SQLite Database**: Lokale database met Better-SQLite3

## 🚀 Installatie

1. **Clone de repository**
   ```bash
   git clone <repository-url>
   cd Frontend-Fase2/NextJS/fdnxt01
   ```

2. **Installeer dependencies**
   ```bash
   npm install
   ```

3. **Start de development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigeer naar [http://localhost:3000](http://localhost:3000)

## 📁 Project Structuur

```
fdnxt01/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── page.tsx             # Homepage
│   │   ├── layout.tsx           # Root layout
│   │   ├── globals.css          # Global styles
│   │   ├── spots/               # Spots pagina's
│   │   ├── add-spot/            # Spot toevoegen
│   │   └── actions.ts           # Server Actions
│   ├── Components/              # React Componenten
│   │   ├── Navigation.tsx       # Navigatie menu
│   │   ├── Footer.tsx           # Footer
│   │   ├── SpotCard.tsx         # Spot card component
│   │   ├── SearchBar.tsx        # Zoekbalk
│   │   └── AddSpotForm.tsx      # Formulier component
│   └── lib/                     # Utilities en database
│       ├── db.ts                # Database functies
│       ├── seed.ts              # Seed data
│       └── utils.ts             # Helper functies
├── public/                      # Statische bestanden
├── streetfood.db               # SQLite database
└── package.json                # Dependencies
```

## 🗄️ Database Schema

```sql
CREATE TABLE spots (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  naam TEXT NOT NULL,
  soort_eten TEXT NOT NULL,
  locatie TEXT NOT NULL,
  omschrijving TEXT NOT NULL,
  afbeelding_url TEXT NOT NULL,
  tiktok_url TEXT,
  google_maps_url TEXT
);
```

## 🎨 Technologieën

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4
- **Database**: SQLite met Better-SQLite3
- **TypeScript**: Voor type safety
- **React**: Server en Client Components

## ✅ Beoordelingscriteria Checklist

- ✅ SQLite database correct opgezet en gevuld met minimaal 5 spots
- ✅ Duidelijke navigatie die werkt op alle apparaten
- ✅ Homepage met uitleg, animatie en call-to-action
- ✅ Spot overzicht met cards inclusief TikTok-embed of Maps-link
- ✅ Zoekfunctie die correct zoekt via database
- ✅ Detailpagina met juiste gegevens en media
- ✅ Toevoegen formulier met validatie
- ✅ Tailwind CSS gebruikt met aantrekkelijke layout
- ✅ Responsive design (mobiel + desktop)

## 🔧 Development

```bash
# Development server starten
npm run dev

# Build voor productie
npm run build

# Productie server starten
npm start
```

---

**Gemaakt met ❤️ voor streetfood liefhebbers!** 🌮🍔🍜

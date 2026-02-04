# StreetfoodSpotter - Inlever Checklist

## 📋 Vereiste Onderdelen

### ✅ Pagina's
- [x] Homepage (/) met sfeer, uitleg en call-to-action
- [x] Spots-overzicht (/spots) met interactieve cards
- [x] Detailpagina (/spots/[id]) met alle spot info
- [x] Spot toevoegen (/add-spot) met formulier

### ✅ Functionaliteit
- [x] SQLite database met minimaal 5 spots
- [x] Zoekfunctie op naam en locatie (SQL LIKE query)
- [x] TikTok embed OF Google Maps link in elke card
- [x] Formulier met validatie
- [x] Data opslaan in database

### ✅ Styling & Design
- [x] Tailwind CSS toegepast
- [x] Responsive design (werkt op mobiel)
- [x] Hover animaties (transform, scale, rotate)
- [x] Gradient backgrounds
- [x] Consistente kleurenschema (oranje/amber)

### ✅ Extra Features (bonus punten!)
- [x] Loading states (skeletons)
- [x] Error handling (error.tsx pagina's)
- [x] 404 Not Found pagina
- [x] Navigation component met active states
- [x] Footer component
- [x] Mobile menu (hamburger menu)
- [x] SEO metadata per pagina
- [x] Toegankelijkheid (aria-labels)
- [x] Client-side validatie
- [x] Lazy loading afbeeldingen

## 🗂️ Bestanden Structuur

```
fdnxt01/
├── src/
│   ├── app/
│   │   ├── page.tsx                 ✅ Homepage
│   │   ├── layout.tsx               ✅ Root layout met nav + footer
│   │   ├── actions.ts               ✅ Server actions
│   │   ├── spots/
│   │   │   ├── page.tsx            ✅ Overzicht met zoeken
│   │   │   ├── loading.tsx         ✅ Loading state
│   │   │   ├── error.tsx           ✅ Error handling
│   │   │   └── [id]/
│   │   │       ├── page.tsx        ✅ Detail pagina
│   │   │       ├── loading.tsx     ✅ Loading state
│   │   │       ├── error.tsx       ✅ Error handling
│   │   │       └── not-found.tsx   ✅ 404 pagina
│   │   └── add-spot/
│   │       └── page.tsx            ✅ Formulier pagina
│   ├── Components/
│   │   ├── Navigation.tsx          ✅ Menu met active states
│   │   ├── MobileMenu.tsx          ✅ Hamburger menu
│   │   ├── Footer.tsx              ✅ Footer
│   │   ├── SpotCard.tsx            ✅ Card component
│   │   ├── SearchBar.tsx           ✅ Zoekfunctie
│   │   ├── AddSpotForm.tsx         ✅ Formulier met validatie
│   │   ├── LoadingSkeleton.tsx     ✅ Loading skeleton
│   │   ├── Toast.tsx               ✅ Notificaties
│   │   └── UI/
│   │       └── homepage.tsx        ✅ Homepage component
│   └── lib/
│       ├── db.ts                   ✅ Database functies
│       ├── seed.ts                 ✅ Seed data (5+ spots)
│       └── utils.ts                ✅ Helper functies
├── streetfood.db                   ✅ SQLite database
├── package.json                    ✅ Dependencies
└── README.md                       ✅ Documentatie
```

## 🎯 Assessment Voorbereiding

### Vragen die je moet kunnen beantwoorden:

#### 1. Database (SQLite)
- **Vraag**: "Hoe werkt je database?"
- **Antwoord**: Ik gebruik SQLite met Better-SQLite3. De database heeft één tabel 'spots' met 8 kolommen (id, naam, soort_eten, locatie, omschrijving, afbeelding_url, tiktok_url, google_maps_url). De database wordt automatisch aangemaakt bij eerste gebruik en gevuld met 5 initiële spots via de seedDatabase() functie.

#### 2. Zoekfunctie
- **Vraag**: "Hoe werkt je zoekfunctie technisch?"
- **Antwoord**: De zoekfunctie gebruikt een SQL LIKE query die zoekt op zowel naam als locatie: `SELECT * FROM spots WHERE naam LIKE ? OR locatie LIKE ?`. De zoekterm wordt omgeven met % tekens voor partial matching. De query wordt server-side uitgevoerd in de searchSpots() functie.

#### 3. Media Integratie
- **Vraag**: "Hoe werkt de media-keuze in je cards?"
- **Antwoord**: Elke card controleert eerst of er een TikTok URL is. Zo ja, dan wordt een iframe embed getoond. Zo nee, dan controleert het of er een Google Maps URL is en toont een link. Als beide leeg zijn, wordt "Geen media beschikbaar" getoond. Dit gebeurt met conditionele rendering in React.

#### 4. Formulier & Validatie
- **Vraag**: "Hoe slaat je formulier gegevens op?"
- **Antwoord**: Het formulier gebruikt een Server Action (createSpot). Bij submit wordt de FormData naar de server gestuurd, waar validatie plaatsvindt (alle velden ingevuld? minimaal 1 URL?). Dan wordt addSpot() aangeroepen die een SQL INSERT query uitvoert. Na succesvol opslaan redirect de gebruiker naar de detail pagina van de nieuwe spot.

#### 5. Tailwind & Styling
- **Vraag**: "Hoe heb je Tailwind gebruikt voor interactie?"
- **Antwoord**: Ik gebruik Tailwind utility classes zoals:
  - `hover:scale-105` en `hover:rotate-1` voor 3D hover effecten
  - `transition-all duration-200` voor soepele animaties
  - `bg-gradient-to-r` voor gradient backgrounds
  - `responsive classes` (sm:, md:, lg:) voor verschillende schermgroottes
  - `shadow-lg` en `hover:shadow-xl` voor depth
  - `active:scale-95` voor feedback bij klikken

#### 6. Next.js Specifiek
- **Vraag**: "Wat zijn de voordelen van Next.js?"
- **Antwoord**: 
  - Server Components voor snellere loading
  - File-based routing met App Router
  - Server Actions voor veilige database operaties
  - Built-in optimalisaties (afbeeldingen, fonts)
  - SEO-vriendelijk met metadata
  - Loading en error states uit de box

## 📦 Inleveren

### Stappen:
1. ✅ Controleer dat alle pagina's werken
2. ✅ Test de zoekfunctie
3. ✅ Test het formulier (voeg een spot toe)
4. ✅ Controleer responsive design (mobiel + desktop)
5. ✅ Maak een .zip van de hele projectmap
6. ✅ Lever in via Teams
7. ✅ Plan assessment in

### Zip-bestand moet bevatten:
- Hele fdnxt01 folder
- Inclusief node_modules OF instructie om `npm install` te draaien
- .gitignore is OK (node_modules kan weggelaten)
- streetfood.db wordt automatisch aangemaakt

## ✨ Extra Punten Features

Deze features gaan boven de basis eisen uit:

1. **Error Boundaries**: Aparte error.tsx pagina's die fouten netjes afhandelen
2. **Loading States**: Skeleton loaders tijdens data fetching
3. **404 Pagina**: Custom not-found.tsx voor niet bestaande spots
4. **Mobile Menu**: Hamburger menu voor kleine schermen
5. **Toast Notifications**: Component voor success/error berichten
6. **Accessibility**: Aria-labels en keyboard navigatie
7. **SEO**: Metadata per pagina voor betere vindbaarheid
8. **Performance**: Lazy loading, image optimization
9. **Type Safety**: TypeScript interfaces voor alle data
10. **Code Organisatie**: Duidelijke component structuur

## 🎓 Succes met je Assessment!

Je bent goed voorbereid als je kunt uitleggen:
- ✅ Hoe je database werkt
- ✅ Hoe de zoekfunctie werkt
- ✅ Hoe je formulier data opslaat
- ✅ Waarom je bepaalde Tailwind classes hebt gekozen
- ✅ Hoe Next.js je heeft geholpen

**Tip**: Oefen het hardop uitleggen aan een klasgenoot!

import { addSpot, getAllSpots } from './db';

export function seedDatabase() {
  const spots = getAllSpots();
  
  // Only seed if database is empty
  if (spots.length > 0) {
    console.log('Database already has data, skipping seed.');
    return;
  }

  console.log('Seeding database with initial spots...');

  const initialSpots = [
    {
      naam: 'De Frietkar',
      soort_eten: 'Patat & Snacks',
      locatie: 'Amsterdam Centrum',
      omschrijving: 'De beste verse frieten met huisgemaakte sauzen. Al 20 jaar een vaste plek op het Leidseplein!',
      afbeelding_url: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800',
      tiktok_url: null,
      google_maps_url: 'https://maps.google.com/?q=Leidseplein+Amsterdam'
    },
    {
      naam: 'Taco Truck Tony',
      soort_eten: 'Mexican Street Food',
      locatie: 'Rotterdam Markthal',
      omschrijving: 'Authentieke Mexicaanse taco\'s met verse ingrediënten. Probeer de pulled pork taco!',
      afbeelding_url: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800',
      tiktok_url: null,
      google_maps_url: 'https://maps.google.com/?q=Markthal+Rotterdam'
    },
    {
      naam: 'Bubble Tea Paradise',
      soort_eten: 'Bubble Tea & Desserts',
      locatie: 'Utrecht Centraal',
      omschrijving: 'De lekkerste bubble tea met meer dan 30 smaken. Ook vegan opties beschikbaar!',
      afbeelding_url: 'https://images.unsplash.com/photo-1525385444292-b3c0d5891104?w=800',
      tiktok_url: null,
      google_maps_url: 'https://maps.google.com/?q=Utrecht+Centraal+Station'
    },
    {
      naam: 'Vegan Delights',
      soort_eten: 'Vegan Burgers',
      locatie: 'Den Haag Centrum',
      omschrijving: '100% plantaardige burgers die zelfs vleesliefhebbers overtuigen. Probeer de Beyond Burger!',
      afbeelding_url: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=800',
      tiktok_url: null,
      google_maps_url: 'https://maps.google.com/?q=Den+Haag+Centrum'
    },
    {
      naam: 'Sushi on Wheels',
      soort_eten: 'Sushi & Poke Bowls',
      locatie: 'Eindhoven Stratumseind',
      omschrijving: 'Verse sushi en poke bowls gemaakt voor je ogen. Dagelijks verse vis van de groothandel!',
      afbeelding_url: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800',
      tiktok_url: null,
      google_maps_url: 'https://maps.google.com/?q=Stratumseind+Eindhoven'
    }
  ];

  initialSpots.forEach((spot) => {
    addSpot(spot);
  });

  console.log(`Successfully seeded ${initialSpots.length} spots!`);
}

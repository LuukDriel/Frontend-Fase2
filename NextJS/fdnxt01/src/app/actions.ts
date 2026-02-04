'use server';

import { addSpot } from '@/lib/db';
import { redirect } from 'next/navigation';

export async function createSpot(formData: FormData) {
  const naam = formData.get('naam') as string;
  const soort_eten = formData.get('soort_eten') as string;
  const locatie = formData.get('locatie') as string;
  const omschrijving = formData.get('omschrijving') as string;
  const afbeelding_url = formData.get('afbeelding_url') as string;
  const tiktok_url = formData.get('tiktok_url') as string;
  const google_maps_url = formData.get('google_maps_url') as string;

  // Validation
  if (!naam || !soort_eten || !locatie || !omschrijving || !afbeelding_url) {
    throw new Error('Alle verplichte velden moeten worden ingevuld');
  }

  if (!tiktok_url && !google_maps_url) {
    throw new Error('Vul minimaal een TikTok URL of Google Maps URL in');
  }

  // Add spot to database
  const spotId = addSpot({
    naam,
    soort_eten,
    locatie,
    omschrijving,
    afbeelding_url,
    tiktok_url: tiktok_url || null,
    google_maps_url: google_maps_url || null,
  });

  redirect(`/spots/${spotId}`);
}

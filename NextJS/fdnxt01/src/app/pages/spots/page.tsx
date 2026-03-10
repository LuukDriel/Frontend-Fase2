import Spots from "@/Components/UI/spots";
import { getSpots } from '@/lib/db';

interface SpotsPageProps {
  searchParams: Promise<{ search?: string }>;
}

export default async function SpotsPage({ searchParams }: SpotsPageProps) {
  // Await search params (Next.js 15+)
  const { search } = await searchParams;
  
  // Fetch spots from database with optional search
  const spots = await getSpots(search);

  return <Spots spots={spots} initialSearch={search} />;
}

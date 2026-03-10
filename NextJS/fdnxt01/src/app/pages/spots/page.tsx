import Spots from "@/Components/UI/spots";
import { getSpots } from '@/lib/db';

interface SpotsPageProps {
  searchParams: Promise<{ search?: string }>;
}

export default async function SpotsPage({ searchParams }: SpotsPageProps) {
  const { search } = await searchParams;
  const spots = await getSpots(search);

  return <Spots spots={spots} initialSearch={search} />;
}

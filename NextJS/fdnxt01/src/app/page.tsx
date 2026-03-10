import Homepage from "@/Components/UI/homepage";
import { getGeneralReviews, getFeaturedSpots } from '@/lib/db';

export default async function Home() {
  const reviews = await getGeneralReviews(3);
  const featuredSpots = await getFeaturedSpots();

  return (
    <Homepage reviews={reviews} featuredSpots={featuredSpots} />
  );
}

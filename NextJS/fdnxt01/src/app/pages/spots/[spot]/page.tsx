import SpotDetail from "@/Components/UI/spotdetail";
import { getSpotById } from '@/lib/db';

interface SpotPageProps {
    params: Promise<{
        spot: string;
    }>;
}

export default async function SpotPage({ params }: SpotPageProps) {
    // Await params before accessing properties (Next.js 15+)
    const { spot } = await params;
    
    // Convert string ID from URL to number for database
    const spotId = parseInt(spot);
    
    // Fetch spot data from database
    const spotData = await getSpotById(spotId);
    
    return <SpotDetail spot={spotData} />;
}

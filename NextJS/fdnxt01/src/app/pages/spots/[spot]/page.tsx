import SpotDetail from "@/Components/UI/spotdetail";
import { getSpotById } from '@/lib/db';

interface SpotPageProps {
    params: Promise<{
        spot: string;
    }>;
}

export default async function SpotPage({ params }: SpotPageProps) {
    const { spot } = await params;
    const spotId = parseInt(spot);
    const spotData = await getSpotById(spotId);
    
    return <SpotDetail spot={spotData} />;
}

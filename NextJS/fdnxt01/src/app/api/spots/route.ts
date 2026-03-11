import { NextResponse } from 'next/server';
import { createSpot } from '@/lib/db';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        
        const { naam, soort_eten, locatie, omschrijving, afbeelding_url } = body;
        
        if (!naam || !soort_eten || !locatie || !omschrijving || !afbeelding_url) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }
        
        const spotId = await createSpot({
            naam,
            soort_eten,
            locatie,
            omschrijving,
            afbeelding_url,
            tiktok_url: body.tiktok_url,
            google_maps_url: body.google_maps_url
        });
        
        return NextResponse.json(
            { success: true, id: spotId },
            { status: 201 }
        );
    } catch (error) {
        console.error('Error creating spot:', error);
        return NextResponse.json(
            { error: 'Failed to create spot' },
            { status: 500 }
        );
    }
}

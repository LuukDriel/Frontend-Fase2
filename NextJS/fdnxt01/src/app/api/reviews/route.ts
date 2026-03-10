import { NextResponse } from 'next/server';
import { createReview } from '@/lib/db';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        
        // Validate required fields
        const { spot_id, rating, text, name, location } = body;
        
        if (!rating || !text || !name || !location) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }
        
        // Validate rating is between 1 and 5
        if (rating < 1 || rating > 5) {
            return NextResponse.json(
                { error: 'Rating must be between 1 and 5' },
                { status: 400 }
            );
        }
        
        // Insert review into database
        const reviewId = await createReview({
            spot_id: spot_id || null,
            rating: parseInt(rating),
            text,
            name,
            location
        });
        
        return NextResponse.json(
            { success: true, id: reviewId },
            { status: 201 }
        );
    } catch (error) {
        console.error('Error creating review:', error);
        return NextResponse.json(
            { error: 'Failed to create review' },
            { status: 500 }
        );
    }
}

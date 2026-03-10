/**
 * Database utility functions
 * Handles SQLite database connections and queries
 */

import Database from 'better-sqlite3';
import path from 'path';
import { SpotWithExtras } from '@/types/spot';
import { Review } from '@/types/review';
import { SpotDetailData } from '@/types/spotdetail';

// Database file path
const DB_PATH = path.join(process.cwd(), 'spots.db');

/**
 * Get a database connection
 * Remember to call db.close() when done!
 */
function getDb() {
    return new Database(DB_PATH);
}

/**
 * Get all spots with ratings from reviews
 * Supports optional search by name or city
 */
export async function getSpots(searchQuery?: string): Promise<SpotWithExtras[]> {
    const db = getDb();
    
    try {
        let query = `
            SELECT 
                s.*,
                COALESCE(AVG(r.rating), 0) as rating,
                COUNT(r.id) as reviewCount
            FROM spots s
            LEFT JOIN reviews r ON r.spot_id = s.id
        `;
        
        const params: any[] = [];
        
        if (searchQuery) {
            query += ` WHERE s.naam LIKE ? OR s.locatie LIKE ?`;
            params.push(`%${searchQuery}%`, `%${searchQuery}%`);
        }
        
        query += ` GROUP BY s.id ORDER BY rating DESC`;
        
        const spots = db.prepare(query).all(...params) as SpotWithExtras[];
        
        return spots;
    } finally {
        db.close();
    }
}

/**
 * Get featured spots (top 3 by rating)
 */
export async function getFeaturedSpots(): Promise<SpotWithExtras[]> {
    const db = getDb();
    
    try {
        const spots = db.prepare(`
            SELECT 
                s.*,
                COALESCE(AVG(r.rating), 0) as rating,
                COUNT(r.id) as reviewCount
            FROM spots s
            LEFT JOIN reviews r ON r.spot_id = s.id
            GROUP BY s.id
            ORDER BY rating DESC
            LIMIT 3
        `).all() as SpotWithExtras[];
        
        return spots;
    } finally {
        db.close();
    }
}

/**
 * Get general app reviews (where spot_id is NULL)
 */
export async function getGeneralReviews(limit: number = 3): Promise<Review[]> {
    const db = getDb();
    
    try {
        const reviews = db.prepare(`
            SELECT * FROM reviews 
            WHERE spot_id IS NULL 
            ORDER BY created_at DESC 
            LIMIT ?
        `).all(limit) as Review[];
        
        return reviews;
    } finally {
        db.close();
    }
}

/**
 * Get reviews for a specific spot
 */
export async function getSpotReviews(spotId: number): Promise<Review[]> {
    const db = getDb();
    
    try {
        const reviews = db.prepare(`
            SELECT * FROM reviews 
            WHERE spot_id = ? 
            ORDER BY created_at DESC
        `).all(spotId) as Review[];
        
        return reviews;
    } finally {
        db.close();
    }
}

/**
 * Get spot detail by ID with all related data
 */
export async function getSpotById(spotId: number): Promise<SpotDetailData | null> {
    const db = getDb();
    
    try {
        // Get spot details
        const spot = db.prepare('SELECT * FROM spots WHERE id = ?').get(spotId);
        
        if (!spot) {
            return null;
        }
        
        // Get reviews for this spot
        const reviews = db.prepare(`
            SELECT * FROM reviews 
            WHERE spot_id = ? 
            ORDER BY created_at DESC
        `).all(spotId) as Review[];
        
        // Calculate average rating
        const avgRating = reviews.length > 0 
            ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length 
            : 0;
        
        // Convert reviews to format expected by component
        const formattedReviews = reviews.map(r => ({
            rating: r.rating,
            text: r.text,
            name: r.name,
            location: r.location
        }));
        
        return {
            ...spot,
            rating: avgRating,
            reviewCount: reviews.length,
            reviews: formattedReviews
        } as SpotDetailData;
    } finally {
        db.close();
    }
}

/**
 * Insert a new spot into the database
 */
export async function createSpot(spotData: {
    naam: string;
    soort_eten: string;
    locatie: string;
    omschrijving: string;
    afbeelding_url: string;
    tiktok_url?: string;
    google_maps_url?: string;
}): Promise<number> {
    const db = getDb();
    
    try {
        const result = db.prepare(`
            INSERT INTO spots (naam, soort_eten, locatie, omschrijving, afbeelding_url, tiktok_url, google_maps_url)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        `).run(
            spotData.naam,
            spotData.soort_eten,
            spotData.locatie,
            spotData.omschrijving,
            spotData.afbeelding_url,
            spotData.tiktok_url || null,
            spotData.google_maps_url || null
        );
        
        return result.lastInsertRowid as number;
    } finally {
        db.close();
    }
}

/**
 * Insert a new review into the database
 */
export async function createReview(reviewData: {
    spot_id: number | null;
    rating: number;
    text: string;
    name: string;
    location: string;
}): Promise<number> {
    const db = getDb();
    
    try {
        const result = db.prepare(`
            INSERT INTO reviews (spot_id, rating, text, name, location)
            VALUES (?, ?, ?, ?, ?)
        `).run(
            reviewData.spot_id,
            reviewData.rating,
            reviewData.text,
            reviewData.name,
            reviewData.location
        );
        
        return result.lastInsertRowid as number;
    } finally {
        db.close();
    }
}



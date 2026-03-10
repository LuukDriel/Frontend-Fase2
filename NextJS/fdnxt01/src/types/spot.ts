/**
 * Database schema for spots table
 * Matches the SQLite database structure
 */
export interface Spot {
    id: number;
    naam: string;                  // Name of the food spot
    soort_eten: string;           // Type of food/cuisine
    locatie: string;              // Location address
    omschrijving: string;         // Description
    afbeelding_url: string;       // Image URL
    tiktok_url: string;           // TikTok profile URL
    google_maps_url: string;      // Google Maps URL
}

/**
 * Extended spot type with optional fields for UI components
 * (for fields that might be added later or calculated)
 */
export interface SpotWithExtras extends Spot {
    rating?: number;              // Average rating (can be calculated from reviews table)
    reviewCount?: number;         // Number of reviews
}

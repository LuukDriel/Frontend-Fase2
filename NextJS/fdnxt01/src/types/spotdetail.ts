import { Spot } from './spot';

/**
 * Extended spot data for detail page
 * Includes data that might come from other tables or be calculated
 */
export interface SpotDetailData extends Spot {
    reviewCount?: number;
    rating?: number;
    priceRange?: string;
    hours?: Record<string, string>;
    phone?: string;
    email?: string;
    menu?: Array<{ name: string; price: string; description: string }>;
    reviews?: Array<{ rating: number; text: string; name: string; location: string }>;
}

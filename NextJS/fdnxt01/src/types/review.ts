export interface Review {
    id: number;
    spot_id: number | null;
    rating: number;
    text: string;
    name: string;
    location: string;
    created_at?: string;
}

export interface ReviewCardData {
    rating: number;
    text: string;
    name: string;
    location: string;
}

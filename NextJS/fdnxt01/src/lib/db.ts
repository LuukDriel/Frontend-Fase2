import Database from 'better-sqlite3';
import path from 'path';

const dbPath = path.join(process.cwd(), 'streetfood.db');
const db = new Database(dbPath);

// Ensure the spots table exists
db.exec(`
  CREATE TABLE IF NOT EXISTS spots (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    naam TEXT NOT NULL,
    soort_eten TEXT NOT NULL,
    locatie TEXT NOT NULL,
    omschrijving TEXT NOT NULL,
    afbeelding_url TEXT NOT NULL,
    tiktok_url TEXT,
    google_maps_url TEXT
  )
`);

export interface Spot {
  id: number;
  naam: string;
  soort_eten: string;
  locatie: string;
  omschrijving: string;
  afbeelding_url: string;
  tiktok_url: string | null;
  google_maps_url: string | null;
}

export function getAllSpots(): Spot[] {
  const stmt = db.prepare('SELECT * FROM spots ORDER BY id DESC');
  return stmt.all() as Spot[];
}

export function getSpotById(id: number): Spot | undefined {
  const stmt = db.prepare('SELECT * FROM spots WHERE id = ?');
  return stmt.get(id) as Spot | undefined;
}

export function searchSpots(query: string): Spot[] {
  const stmt = db.prepare(
    'SELECT * FROM spots WHERE naam LIKE ? OR locatie LIKE ? ORDER BY id DESC'
  );
  const searchTerm = `%${query}%`;
  return stmt.all(searchTerm, searchTerm) as Spot[];
}

export function addSpot(spot: Omit<Spot, 'id'>): number {
  const stmt = db.prepare(`
    INSERT INTO spots (naam, soort_eten, locatie, omschrijving, afbeelding_url, tiktok_url, google_maps_url)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `);
  
  const result = stmt.run(
    spot.naam,
    spot.soort_eten,
    spot.locatie,
    spot.omschrijving,
    spot.afbeelding_url,
    spot.tiktok_url || null,
    spot.google_maps_url || null
  );
  
  return result.lastInsertRowid as number;
}

export default db;

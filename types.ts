export interface Apartment {
  id: number;
  number: string;
  rooms: number;
  floor: number;
  area: number;
  gardenArea: number;
  polygonPoints?: string | string[]; // Współrzędne dla SVG mapy (opcjonalne)
  imageUrls?: string[]; // Ścieżki do obrazów rzutów mieszkania (opcjonalne)
}

export type SortOption = 'floor' | 'rooms' | 'area' | 'gardenArea' | 'status';
export type SortDirection = 'asc' | 'desc';
import { ArtistImage } from './artist-image';

export interface Artist {
  id: string;
  name: string;
  popularity: number;
  genres: string;
  images: ArtistImage[];
}

import { ArtistImage } from './artist-image';

export interface Album {
  id: string;
  name: string;
  release_date: Date;
  type: string;
  images: ArtistImage[];
}

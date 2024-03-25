import { Album } from './Album';
import { Artist } from './artist';

export interface Track {
  album: Album;
  artist: Artist[];
  name: string;
  preview_url: string;
  type: string;
}

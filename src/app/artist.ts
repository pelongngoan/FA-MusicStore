export interface Artist {
  name: string;
  popularity: number;
  type: 'artist';
  images: [
    {
      url: string;
      height: number;
      width: number;
    }
  ];
}

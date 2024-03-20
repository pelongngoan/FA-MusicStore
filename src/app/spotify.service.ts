import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  private apiUrl =
    'https://api.spotify.com/v1/search?q=adam%20levine&type=artist';

  constructor(private http: HttpClient) {}

  searchArtists(query: string): Observable<any> {
    // const url = `${this.apiUrl}?q=${query}&type=artist`;
    // console.log(this.http.get(url));
    // console.log(url);
    return this.http.get(this.apiUrl);
  }
  async getProfile(accessToken: string | null) {
    accessToken = localStorage.getItem('access_token');

    const response = await fetch(this.apiUrl, {
      headers: {
        Authorization:
          'Bearer ' +
          'BQBEzdomMOdD8A-wr9ssRoutxF63dTH7_zkXwjyWg0v_6rwvVh-Pc-kxIaErF050MYcx7F7Z7p1YaVqQFXKmfKDgb7h1h1YF5XMAr_ogSM_vq_1VoJPGFHZbnqU_PiM_Bm-s2O2rBXJCkXI20zKm-HF8su0tMPdS_bfepYLuTki_1wjZzE51h3gewULy7axxxuycp7rrBYiHySxkCausZNr5R2ayZJWRm6xy4Fz_fXXzGrzbQSZ3FkdzM7KIXkr_A2rECw6rcxaDuua5I877',
      },
    });

    const data = await response.json();
    console.log(data);
  }
  // Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token = 'BQBEzdomMOdD8A-wr9ssRoutxF63dTH7_zkXwjyWg0v_6rwvVh-Pc-kxIaErF050MYcx7F7Z7p1YaVqQFXKmfKDgb7h1h1YF5XMAr_ogSM_vq_1VoJPGFHZbnqU_PiM_Bm-s2O2rBXJCkXI20zKm-HF8su0tMPdS_bfepYLuTki_1wjZzE51h3gewULy7axxxuycp7rrBYiHySxkCausZNr5R2ayZJWRm6xy4Fz_fXXzGrzbQSZ3FkdzM7KIXkr_A2rECw6rcxaDuua5I877';
async fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body:JSON.stringify(body)
  });
  return await res.json();
}

async getTopTracks(){
  return (await this.fetchWebApi(
    'v1/me/top/tracks?time_range=long_term&limit=5', 'GET', {}
  )).items;
}

const topTracks = await getTopTracks();
console.log(
  topTracks?.map(
    ({name, artists}) =>
      `${name} by ${artists.map(artist => artist.name).join(', ')}`
  )
)
}

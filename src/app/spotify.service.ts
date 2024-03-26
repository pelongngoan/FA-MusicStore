import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import { DOCUMENT } from '@angular/common';
import express from 'express';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  private authKey =
    'Bearer BQDVWGA__a4jC9CLiF50770jI4zVrBfQij8xZep2H-RR6S1M30GA5Cep8sU6W4WHeSg4d-1NxoMfh8n2PPmyogjNoIyQ8Ir_vk7pK5ibhwWoBlLrXem-Gj3YElHSeIesFXnTmR1WOhrx93DjsCv5xtdeaPG9Qn4FQiv_TNTtP9cTtwVVmMmEPbw6EzkMTEhyPiNlY1CJlXgCANob_Ddg04RRlXU4UEWlLnJjpzgAA8lPRst2_HGqYvGM6cy4pOE6n15TzYlGJZB5hNMVhz8i';
  private httpOptions = {
    headers: new HttpHeaders({
      Authorization: this.authKey,
    }),
  };
  constructor(private _httpClient: HttpClient) {}

  public getArtistList(searchQuery: string | undefined): Observable<any> {
    let artist = `https://api.spotify.com/v1/search?q=${searchQuery}&type=artist`;
    console.log(artist);
    return this._httpClient.get<any>(artist, this.httpOptions);
  }
  public getArtistTopTracks(id: string | undefined): Observable<any> {
    let track = `https://api.spotify.com/v1/artists/${id}/top-tracks?market=US`;
    console.log(track);
    return this._httpClient.get<any>(track, this.httpOptions);
  }
}

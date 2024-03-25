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
    'Bearer BQDAy_NqvBj_w17KnMIdDc34PNGzgebG55-0SAq_32feK9aBkFn0rofz97CsOgx-Sh2uJeuKOUFESeCpdAnOao88QYV5qxFgK6siLbkHVa7jxa75dhvyOtIeIPQGtYXC91xFr5WRJfQt_9wI5ncpleFTcg5VxG8fLaHxef7iHWtxZiWrVhUOSH0UWZOkWoHVdQNvEcaVnKVTk_H9xFER0p9X68BPP_-MJPRjoa6BXro8X6Osx8vtN0qQXkeKcMCiWqEBk8aGG9TTYl4PmS6T';
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

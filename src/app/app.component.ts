import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpotifyService } from './spotify.service';
import { Artist } from './artist';
import { HttpClientModule } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  providers: [SpotifyService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  artistName = new FormControl('adam');
  spotifyService: SpotifyService = inject(SpotifyService);
  artists: Artist[] = [];
  // constructor(private spotify: SpotifyService) {
  //   this.artist = this.spotifyService.searchArtists('michael jackson');
  // }
  title = 'FA-MusicStore';
  search(query: string) {
    // this.spotifyService.searchArtists(query).subscribe((data) => {
    //   console.log(data);
    //   this.artists = data.artists.items;
    // });
    console.log(
      this.spotifyService
        .searchArtists(query)
        .pipe(map((data) => data.artists.items))
    );
    console.log(
      this.spotifyService.getProfile(localStorage.getItem('access_token'))
    );

    console.log(this.spotifyService.searchArtists(query));
  }
}

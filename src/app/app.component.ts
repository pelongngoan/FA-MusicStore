import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpotifyService } from './spotify.service';
import { Artist } from './artist';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';
import { Track } from './track';
import { TrackDetailComponent } from './track-detail/track-detail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ArtistDetailComponent,
    TrackDetailComponent,
  ],
  providers: [SpotifyService, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  // @ViewChild('audioPlayer') audioPlayerRef: ElementRef | undefined;
  // audioPlaying: boolean = false;
  spotifyService: SpotifyService = inject(SpotifyService);
  artists: Artist[] = [];
  artistTracks: Track[] = [];
  searchQuery: string | undefined;
  title = 'FA-MusicStore';
  https: any;
  public handleSearchArtist() {
    this.artistTracks = [];
    this.spotifyService.getArtistList(this.searchQuery).subscribe((data) => {
      this.artists = data.artists.items;
    });
  }
  public handleGetArtistTopTrack(artistId: string) {
    this.spotifyService.getArtistTopTracks(artistId).subscribe((data) => {
      this.artistTracks = data.tracks;
    });
  }
  // handleAudioClick() {
  //   const audioPlayer = this.audioPlayerRef?.nativeElement as HTMLAudioElement;

  //   if (this.audioPlaying) {
  //     audioPlayer.pause();
  //   } else {
  //     const audioPlayers = document.querySelectorAll('audio');
  //     audioPlayers.forEach((player) => {
  //       if (player !== audioPlayer) {
  //         (player as HTMLAudioElement).pause(); // Pause other audio if playing
  //       }
  //     });
  //     audioPlayer.play();
  //   }

  //   this.audioPlaying = !this.audioPlaying;
  // }
}

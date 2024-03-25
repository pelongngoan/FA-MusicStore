import { Component, Input, inject } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { Track } from '../track';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-track-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './track-detail.component.html',
  styleUrl: './track-detail.component.scss',
})
export class TrackDetailComponent {
  @Input() track: Track | undefined;
  @Input() numberOfTrack: string | undefined;
  handlePreviewClick(arg0: Track | undefined) {
    console.log(arg0);
  }
}

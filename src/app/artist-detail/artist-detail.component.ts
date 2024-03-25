import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Artist } from '../artist';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-artist-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './artist-detail.component.html',
  styleUrl: './artist-detail.component.scss',
})
export class ArtistDetailComponent {
  @Input() artist: Artist | undefined;
  @Output() newItemEvent = new EventEmitter<string>();
  handleCardClick(arg0: Artist | undefined) {
    this.newItemEvent.emit(arg0?.id);
  }
}

import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule],
  template: `
  <h3>Los juegos favoritos de {{username}}</h3>
    <ul>
      @for (game of games; track game.id){
        <li (click)="fav(game.name)">{{game.name}}</li>
      }
    </ul>
  `,
  styleUrl: './games.component.scss'
})
export class GamesComponent {
  @Input() username = "";
  @Output() addFavoriteEvent = new EventEmitter<string>();

  fav(gameName: string) {
    this.addFavoriteEvent.emit(gameName);
  }

  games = [
    {
      id: 1,
      name: 'Bloodborne',
    },
    {
      id: 2,
      name: 'Until Dawn',
    },
    {
      id: 3,
      name: 'The Last of Us',
    },
  ]
}

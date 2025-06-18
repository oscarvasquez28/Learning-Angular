import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule],
  template: `
  <h3>Los juegos favoritos de {{username}}</h3>
    <ul>
      @for (game of games; track game.id){
        <li>{{game.name}}</li>
      }
    </ul>
  `,
  styleUrl: './games.component.scss'
})
export class GamesComponent {
  @Input() username = "";
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

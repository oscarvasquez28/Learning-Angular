import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ul>
      @for (game of games; track game.id){
        <li>{{game.name}}</li>
      }
    </ul>
  `,
  styleUrl: './games.component.scss'
})
export class GamesComponent {
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

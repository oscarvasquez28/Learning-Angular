import { Component } from '@angular/core';
import { GamesComponent } from "../games/games.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [GamesComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  username = 'Oscar Vasquez';
  isLoggedIn = false;
  favGame = '';

  getFavorite(gameName: string) {
    this.favGame = gameName;
  }

  greet() {
    alert(`Hola, ${this.username}!`);
  }
}

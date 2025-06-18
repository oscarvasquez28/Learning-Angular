import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
  { path: 'home', component: UserComponent },
  { path: '**', redirectTo: 'home' }
];

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StartMenuComponent} from "./start-menu/start-menu.component";
import {PlayerProfileComponent} from "./player-profile/player-profile.component";
import {ClickerGameComponent} from "./clicker-game/clicker-game.component";
import {LeaderboardComponent} from "./leaderboard/leaderboard.component";

const routes: Routes = [
  {
    path: 'start-menu',
    component: StartMenuComponent
  },
  {
    path: 'player-profile/:name',
    component: PlayerProfileComponent
  },
  {
    path: 'records/:time',
    component: LeaderboardComponent
  },
  {
    path: 'game/:time',
    component: ClickerGameComponent
  },
  {
    path: '',
    redirectTo: '/records/5',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartMenuComponent } from './start-menu/start-menu.component';
import {PlayersService} from "./players.service";
import {FormsModule} from "@angular/forms";
import { PlayerProfileComponent } from './player-profile/player-profile.component';
import { ButtonComponent } from './button/button.component';
import { ClickerGameComponent } from './clicker-game/clicker-game.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

@NgModule({
  declarations: [
    AppComponent,
    StartMenuComponent,
    PlayerProfileComponent,
    ButtonComponent,
    ClickerGameComponent,
    LeaderboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [PlayersService],
  bootstrap: [AppComponent]
})
export class AppModule { }

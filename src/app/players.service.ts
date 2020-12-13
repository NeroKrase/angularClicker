import { Injectable } from '@angular/core';
import {IPlayer} from "./IPlayer";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  constructor(private router: Router) { }

  private players:IPlayer[] = []

  getPlayers(){
    return this.players
  }

  signUp(name){
    if(!this.players.filter(p => p.name === name).length){
      this.players.push({name, record5s: 0, record10s: 0, record15s: 0})
      this.router.navigate(['/player-profile', name])
    }
    else {
      alert('This nickname is already taken!')
    }
  }

  signIn(name){
    const player = this.players.filter(p => p.name === name)[0]
    if(player){
      this.router.navigate(['/player-profile', player.name])
    }
    else {
      alert('There is no user with such nickname!')
    }
  }

  redirectToStartMenu(){
    this.router.navigate(['/start-menu'])
  }

  getCurrentPlayer(name){
    return this.players.filter(p => p.name === name)[0]
  }

  updatePlayerRecord(score, time, name){
    switch (time){
      case 5:
        this.players.map(p => p.name === name ? p.record5s = score : p.record5s)
        break;
      case 10:
        this.players.map(p => p.name === name ? p.record10s = score : p.record5s)
        break;
      case 15:
        this.players.map(p => p.name === name ? p.record15s = score : p.record5s)
        break;
      default:
        console.log("ERROR")
        break;
    }
  }
}

import { Component, OnInit } from '@angular/core';
import {PlayersService} from "../players.service";
import {IPlayer} from "../IPlayer";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {

  constructor(private playersService: PlayersService, private route: ActivatedRoute) { }

  players:IPlayer[]
  time:number = Number.parseInt(this.route.snapshot.paramMap.get('time'))
  name:string = this.route.snapshot.queryParamMap.get('name')

  ngOnInit(): void {
    this.players = this.playersService.getPlayers()
    switch (this.time){
      case 5:
        this.players.sort((p1, p2) => p2.record5s - p1.record5s)
        break;
      case 10:
        this.players.sort((p1, p2) => p2.record10s - p1.record10s)
        break;
      case 15:
        this.players.sort((p1, p2) => p2.record15s - p1.record15s)
        break;
      default:
        console.log("ERROR")
        break;
    }
  }

}

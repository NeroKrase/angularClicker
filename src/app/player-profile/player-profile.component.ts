import { Component, OnInit } from '@angular/core';
import {PlayersService} from "../players.service";
import {IPlayer} from "../IPlayer";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-player-profile',
  templateUrl: './player-profile.component.html',
  styleUrls: ['./player-profile.component.scss']
})
export class PlayerProfileComponent implements OnInit {

  constructor(private playersService: PlayersService, private route: ActivatedRoute) { }

  player:IPlayer

  ngOnInit(): void {
    this.player = this.playersService.getCurrentPlayer(this.route.snapshot.paramMap.get('name'))
  }

  backToForm(){
    this.playersService.redirectToStartMenu()
  }

}

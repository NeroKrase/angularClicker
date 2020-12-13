import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription, timer} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {PlayersService} from "../players.service";
import {IPlayer} from "../IPlayer";

@Component({
  selector: 'app-clicker-game',
  templateUrl: './clicker-game.component.html',
  styleUrls: ['./clicker-game.component.scss']
})
export class ClickerGameComponent implements OnInit, OnDestroy {

  constructor(private playersService: PlayersService, private route: ActivatedRoute) { }

  player:IPlayer
  score:number = 0
  countDown: Subscription
  startTime:number = Number.parseInt(this.route.snapshot.paramMap.get('time'))
  counter:number = Number.parseInt(this.route.snapshot.paramMap.get('time')) + 1
  tick:number = 1000
  message:string = ''

  ngOnInit():void {
    this.countDown = timer(0, this.tick).subscribe(() => {
      --this.counter
      if(this.counter <= 0){
        this.player = this.playersService.getCurrentPlayer(this.route.snapshot.queryParamMap.get('name'))
        switch (this.startTime){
          case 5:
            if(this.player.record5s > this.score){
              this.message = "Next time try harder!"
            }
            else{
              this.message = "Congratulations! You've break your last record!"
              this.playersService.updatePlayerRecord(this.score, this.startTime, this.player.name)
            }
            break;
          case 10:
            if(this.player.record10s > this.score){
              this.message = "Next time try harder!"
            }
            else{
              this.message = "Congratulations! You've break your last record!"
              this.playersService.updatePlayerRecord(this.score, this.startTime, this.player.name)
            }
            break;
          case 15:
            if(this.player.record15s > this.score){
              this.message = "Next time try harder!"
            }
            else{
              this.message = "Congratulations! You've break your last record!"
              this.playersService.updatePlayerRecord(this.score, this.startTime, this.player.name)
            }
            break;
          default:
            console.log("ERROR")
            break;
        }
      }
    });
  }

  ngOnDestroy():void {
    this.countDown=null;
  }

  increment(){
    this.score++
  }
}



import { Component, OnInit } from '@angular/core';
import {PlayersService} from "../players.service";

@Component({
  selector: 'app-start-menu',
  templateUrl: './start-menu.component.html',
  styleUrls: ['./start-menu.component.scss']
})
export class StartMenuComponent implements OnInit {

  constructor(private playersService:PlayersService) { }

  name:string = 'Name'

  ngOnInit(): void {
  }

  addNewPlayer(name):void{
    this.playersService.signUp(name)
  }

  login(name):void{
    this.playersService.signIn(name)
  }

}

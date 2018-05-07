import { Component, OnInit } from '@angular/core';

import { BetService } from '../services/bet.service';

@Component({
  selector: 'cc-bets',
  templateUrl: './bets.component.html',
  styleUrls: ['./bets.component.css']
})
export class BetsComponent implements OnInit {
  bets = [];

  constructor(private betService: BetService) { }

  ngOnInit() {
    this.betService.getBets().subscribe((data) => {
      console.log(data);
    }, (err) => {
      console.error(err)
    })
  }

}

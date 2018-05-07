import { Component, OnInit } from '@angular/core';

import { BetService } from '../services/bet.service';

@Component({
  selector: 'cc-bet-form',
  templateUrl: './bet-form.component.html',
  styleUrls: ['./bet-form.component.css']
})
export class BetFormComponent implements OnInit {
  bet = {title: '', description: '', price: ''};

  constructor(private betService: BetService) { }

  ngOnInit() {
  }

  addBet(form) {
    console.log('form value', form.value);
    this.betService.saveBet({
      id: Date.now(),
      creator: 'Sam',
      dateCreation: '07/05/2018',
      title: form.value.title,
      description: form.value.description,
      price: form.value.price
    }).subscribe(
      data => {

      }
    )
    form.reset();
  }
}

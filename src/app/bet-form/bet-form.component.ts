import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cc-bet-form',
  templateUrl: './bet-form.component.html',
  styleUrls: ['./bet-form.component.css']
})
export class BetFormComponent implements OnInit {
  bet = {title: '', description: ''};

  constructor() { }

  ngOnInit() {
  }

  addBet(form) {
    console.log(form.value);
    form.reset();
  }
}

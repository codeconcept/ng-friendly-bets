import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BetFormComponent } from './bet-form/bet-form.component';
import { BetsComponent } from './bets/bets.component';

@NgModule({
  declarations: [
    AppComponent,
    BetFormComponent,
    BetsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

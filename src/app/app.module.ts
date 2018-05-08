import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { BetFormComponent } from './bet-form/bet-form.component';
import { BetsComponent } from './bets/bets.component';
import { BetDetailsComponent } from './bet-details/bet-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { BetnewComponent } from './betnew/betnew.component';

const routes: Route[] = [
  { path: '', component: HomeComponent},
  { path: 'bet-new', component: BetnewComponent},
  { path: 'bets/:id', component: BetDetailsComponent },
  { path: 'bets', component: BetsComponent },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    BetFormComponent,
    BetsComponent,
    BetDetailsComponent,
    PageNotFoundComponent,
    HomeComponent,
    BetnewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

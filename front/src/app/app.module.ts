import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { LeaguesModule } from './features/leagues/leagues.module';
import { NgrxStoreModule } from './core/store/ngrx-store.module';
import { EnvironmentModule } from '../environments/environment.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule, BrowserAnimationsModule, AppRoutingModule, LeaguesModule, NgrxStoreModule, EnvironmentModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

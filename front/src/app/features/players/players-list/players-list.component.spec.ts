import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersListComponent } from './players-list.component';
import { Component } from '@angular/core';
import { TeamPlayersType } from '../../models/mapped-types';
import { BehaviorSubject } from 'rxjs';
import { PlayersModule } from '../players.module';
import { playersMock } from '../../../../../modk-data/db';
import { By } from '@angular/platform-browser';

let players: TeamPlayersType;

@Component({
  template: `<app-players-list [players]="players$ | async"></app-players-list>`,
})
export class TestComponent {
  readonly players$ = new BehaviorSubject(players);
}

describe('PlayersListComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayersListComponent, TestComponent],
      imports: [PlayersModule],
    }).compileComponents();
  });

  beforeEach(() => {
    players = playersMock.teamPlayers;

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show players', () => {
    component.players$.next(players);
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('.player-row')).length).toEqual(2);
  });

  it('should show "No team found" if no player', () => {
    component.players$.next([]);
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('.player-row')).length).toEqual(0);
    expect(fixture.debugElement.queryAll(By.css('#no-player')).length).toEqual(1);
  });
});

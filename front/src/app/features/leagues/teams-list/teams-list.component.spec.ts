import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsListComponent } from './teams-list.component';
import { LeagueTeamsType } from '../../models/mapped-types';
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { teamsMock } from '../../../../../modk-data/db';
import { By } from '@angular/platform-browser';

let teams: LeagueTeamsType;

@Component({
  template: `<app-teams-list [teams]="teams$ | async"></app-teams-list>`,
})
export class TestComponent {
  readonly teams$ = new BehaviorSubject(teams);
}

describe('LeaguesListComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamsListComponent, TestComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    teams = teamsMock.leagueTeams;

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show teams', () => {
    component.teams$.next(teams);
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('.col-6')).length).toEqual(3);
  });

  it('should show "No team found" if no team', () => {
    component.teams$.next([]);
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('.col-6')).length).toEqual(0);
    expect(fixture.debugElement.queryAll(By.css('#no-team')).length).toEqual(1);
  });
});

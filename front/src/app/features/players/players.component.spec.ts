import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersComponent } from './players.component';
import { PlayersModule } from './players.module';
import { provideMockStore } from '@ngrx/store/testing';
import { PlayersFacadeService } from '../../core/store/players/players-facade.service';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { Loadable } from '../../shared/loadable/loadable';
import { teamPlayersInitialState } from '../../core/store/players/players.reducer';
import { By } from '@angular/platform-browser';

describe('PlayersComponent', () => {
  let component: PlayersComponent;
  let fixture: ComponentFixture<PlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayersComponent],
      imports: [PlayersModule, RouterTestingModule],
      providers: [
        {
          provide: PlayersFacadeService,
          useValue: {
            teamPlayersState$: of(Loadable.loading(teamPlayersInitialState)),
          },
        },
        provideMockStore(),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have spinner if loading', () => {
    expect(fixture.debugElement.queryAll(By.css('mat-spinner')).length).toEqual(1);
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaguesComponent } from './leagues.component';
import { LeaguesModule } from './leagues.module';
import { provideMockStore } from '@ngrx/store/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('LeaguesComponent', () => {
  let component: LeaguesComponent;
  let fixture: ComponentFixture<LeaguesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeaguesComponent],
      imports: [LeaguesModule, BrowserAnimationsModule],
      providers: [provideMockStore()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

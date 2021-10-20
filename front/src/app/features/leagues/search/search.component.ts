import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { League } from '../../models/models';
import { LeaguesState } from '../../../core/store/leagues/leagues.reducer';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject();
  readonly searchForm: FormGroup;

  @Input() leagues: LeaguesState | null;

  @Output() searchLeagues = new EventEmitter<string>();
  @Output() getLeagueTeamsEvent = new EventEmitter<string>();

  constructor(private formBuilder: FormBuilder) {
    this.searchForm = formBuilder.group({
      query: [null],
    });
  }

  getName(id: string): string {
    // @ts-ignore
    return this.leagues ? this.leagues.data.find((league) => league._id === id)?.name : '';
  }

  getLeagueTeams(id: string): void {
    this.getLeagueTeamsEvent.emit(id);
  }

  ngOnInit(): void {
    this.searchForm
      .get('query')
      ?.valueChanges.pipe(debounceTime(200), takeUntil(this.ngUnsubscribe))
      .subscribe((query) => this.searchLeagues.emit(query));
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}

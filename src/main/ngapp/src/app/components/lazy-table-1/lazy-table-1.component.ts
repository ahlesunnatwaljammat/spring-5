import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';

import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {merge} from 'rxjs/observable/merge';
import {of as observableOf} from 'rxjs/observable/of';
import {catchError} from 'rxjs/operators/catchError';
import {map} from 'rxjs/operators/map';
import {startWith} from 'rxjs/operators/startWith';
import {switchMap} from 'rxjs/operators/switchMap';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-lazy-table-1',
  templateUrl: './lazy-table-1.component.html',
  styles: []
})
export class LazyTable1Component implements OnInit, AfterViewInit {
  array = [];
  counter = 0;
  exampleDatabase: ExampleHttpDao | null;
  displayedColumns = ['created', 'state', 'number', 'title'];
  dataSource = new MatTableDataSource();

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private http: HttpClient) {
    for (let i = 0 ; i < 10 ; i++) {
      this.array.push('This is a element ' + this.counter++);
    }
  }

  ngOnInit() {
    this.exampleDatabase = new ExampleHttpDao(this.http);

    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    // merge - Turn multiple observables into a single observable.
    // startWith({}) - Emit given value first.
    // switchMap - The main difference between switchMap and other flattening operators is the cancelling effect.
    merge(this.sort.sortChange, this.paginator.page).pipe(startWith({}), switchMap( () => {
        this.isLoadingResults = true;
        return this.exampleDatabase.getRepoIssues(this.sort.active, this.sort.direction, this.paginator.pageIndex);
      }), map(data => {
        // Flip flag to show that loading has finished.
        this.isLoadingResults = false;
        this.isRateLimitReached = false;
        this.resultsLength = data.total_count;

        return data.items;
      }),
      catchError(() => {
        this.isLoadingResults = false;
        // Catch if the GitHub API has reached its rate limit. Return empty data.
        this.isRateLimitReached = true;
        return observableOf([]);
      })
    ).subscribe(data => this.dataSource.data = data);
  }
  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  onScrollDown () {
    console.log('scrolled!!');
    for (let i = 0 ; i < 10 ; i++) {
      this.array.push('This is a element ' + this.counter++);
    }
  }

  onScrollUp () {
    console.log('scrolled up!!');
  }
}

export interface GithubApi {
  items: GithubIssue[];
  total_count: number;
}

export interface GithubIssue {
  created_at: string;
  number: string;
  state: string;
  title: string;
}

/** An example database that the data source uses to retrieve data for the table. */
export class ExampleHttpDao {
  constructor(private http: HttpClient) {
    console.log(http);
  }

  getRepoIssues(sort: string, order: string, page: number): Observable<GithubApi> {
    const href = 'https://api.github.com/search/issues';
    const requestUrl = `${href}?q=repo:angular/material2&sort=${sort}&order=${order}&page=${page + 1}`;
    return this.http.get<GithubApi>(requestUrl);
  }
}

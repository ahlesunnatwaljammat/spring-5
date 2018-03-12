import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {HttpClient} from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import {merge} from 'rxjs/observable/merge';
import {startWith} from 'rxjs/operators/startWith';
import {switchMap} from 'rxjs/operators/switchMap';
import {map} from 'rxjs/operators/map';
import {Observable} from 'rxjs/Observable';
import {mapTo} from 'rxjs/operator/mapTo';
import {interval} from 'rxjs/observable/interval';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-lazy-table-2',
  templateUrl: './lazy-table-2.component.html',
  styles: []
})
export class LazyTable2Component implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private http: HttpClient) { }

  private counter = 0;
  issueArray = new Array<Issue>();
  subject = new BehaviorSubject(new Array<Issue>());
  displayedColumns = ['created', 'title'];
  dataSource = new MatTableDataSource();

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  ngOnInit() {
    for (let i = 0 ; i < 10 ; i++) {
      const issue: Issue = { created_at : new Date().toDateString(), title : 'Example - ' + this.counter++};
      this.issueArray.push(issue);
    }

    this.subject.next(this.issueArray);

    // If the user changes the sort order, reset back to the first page.
    // this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    // merge - Turn multiple observables into a single observable.
    // startWith({}) - Emit given value first.
    // switchMap - The main difference between switchMap and other flattening operators is the cancelling effect.
    merge(this.sort.sortChange).pipe(startWith({}), switchMap( () => {
      return this.subject.asObservable();
    }), map(data => {
        // Flip flag to show that loading has finished.
        this.isLoadingResults = false;
        this.isRateLimitReached = false;
        return data;
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
    this.isLoadingResults = true;

    setTimeout(() => {
      for (let i = 0 ; i < 10 ; i++) {
        const issue: Issue = { created_at : new Date().toDateString(), title : 'Example - ' + this.counter++};
        this.issueArray.push(issue);
      }

      this.subject.next(this.issueArray);
    }, 500);

  }
}

export interface Issue {
  created_at: string;
  title: string;
}

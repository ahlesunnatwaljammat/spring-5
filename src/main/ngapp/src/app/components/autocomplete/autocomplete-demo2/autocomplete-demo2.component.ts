import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {FormControl} from "@angular/forms";
import {map} from "rxjs/operators/map";
import {startWith} from "rxjs/operators/startWith";
import {HttpClient} from "@angular/common/http";
import {Wiki} from "../../wiki/wiki-list/wiki-list.component";

export class State {
  constructor(public name: string, public population: string, public flag: string) { }
}

@Component({
  selector: 'app-autocomplete-demo2',
  templateUrl: './autocomplete-demo2.component.html',
  styles: []
})
export class AutocompleteDemo2Component implements OnInit, AfterViewInit {

  stateCtrl: FormControl;
  filteredStates: Observable<any[]>;
  wikiList : Wiki[] = [];
  host = location.protocol + '//' +location.host;

  constructor(private http : HttpClient) {
    this.stateCtrl = new FormControl();
  }

  ngOnInit() {
    this.http.get<Wiki[]>(this.host+"/api/wiki/search/e").subscribe(result => {
      for(let i =0 ; i < result.length ; i++){
        this.wikiList.push(result[i]);
      }

      this.filteredStates = this.stateCtrl.valueChanges
        .pipe(
          startWith(''),
          map(wiki => wiki ? this.filterStates(wiki) : this.wikiList.slice())
        );
    });
  }

  ngAfterViewInit(): void {
  }

  filterStates(name: string) {
    return this.wikiList.filter(wiki =>
      wiki.title.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  searchWikiOnServer(search,event) {
    if(event.keyCode == 13){
      this.wikiList = [];
      this.http.get<Wiki[]>(this.host+"/api/wiki/search/"+search).subscribe(result => {
        for(let i =0 ; i < result.length ; i++){
          this.wikiList.push(result[i]);
        }

        this.filteredStates = this.stateCtrl.valueChanges
          .pipe(
            startWith(''),
            map(wiki => wiki ? this.filterStates(wiki) : this.wikiList.slice())
          );
      });
    }
  }
}

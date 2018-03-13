import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-wiki-list',
  templateUrl: './wiki-list.component.html',
  styleUrls: ['./wiki-list.component.css']
})
export class WikiListComponent implements OnInit {

  constructor(private http : HttpClient) { }

  wikiList = new Array<Wiki>();

  ngOnInit() {
    const host = location.protocol + '//' +location.host;
    this.http.get<Wiki[]>(host+"/api/wiki/list").subscribe(result => {
      for(let i =0 ; i < result.length ; i++){
        this.wikiList.push(result[i]);
      }
    });
  }
}

export interface Wiki {
  id : number,
  content: string
}

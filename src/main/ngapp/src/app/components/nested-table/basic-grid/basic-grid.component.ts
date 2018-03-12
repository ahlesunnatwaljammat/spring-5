import { Component, OnInit, Input } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {Element} from '../nested-table.component';

@Component({
  selector: 'app-basic-grid',
  templateUrl: './basic-grid.component.html',
  styleUrls: ['./basic-grid.component.css']
})
export class BasicGridComponent implements OnInit{

@Input() data: any;

  displayedColumns = ['position', 'name', 'weight', 'symbol', 'action'];
  dataSource = new MatTableDataSource(DATA);


  constructor() {

    console.log(this.dataSource);
  }

  ngOnInit() {
  }


}


const DATA: Element[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', icon: 'https://imgc.allpostersimages.com/img/posters/titanic_u-L-F4S6CQ0.jpg?src=gp&w=300&h=375'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', icon: 'https://imgc.allpostersimages.com/img/posters/lady-bird_u-L-F97PEQ0.jpg?src=gp&w=300&h=375'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', icon: 'https://imgc.allpostersimages.com/img/posters/the-godfather_u-L-EZ2740.jpg?src=gp&w=300&h=375'},
];

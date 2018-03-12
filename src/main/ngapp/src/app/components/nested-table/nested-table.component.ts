import { Component, ViewChildren, ViewContainerRef, ComponentFactoryResolver, ComponentFactory} from '@angular/core';
import {MatTableDataSource, MatCardModule} from '@angular/material';
import { DetailRowComponent } from './detail-row/detail-row.component';
import { BasicGridComponent } from './basic-grid/basic-grid.component';

@Component({
  selector: 'app-nested-table',
  templateUrl: './nested-table.component.html',
  styleUrls: ['../../../assets/default.scss']
})
export class NestedTableComponent {

  @ViewChildren('tableRow', { read: ViewContainerRef }) rowContainers;
  @ViewChildren('tableRow2', { read: ViewContainerRef }) rowContainers2;

  expandedRow: number;

  title = 'app';
  displayedColumns = ['position', 'chart', 'icon', 'name', 'weight', 'symbol', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  protected detailComponent = DetailRowComponent;
  protected basicComponent = BasicGridComponent;

  constructor(private resolver: ComponentFactoryResolver) { }

insertComponent(index: number, component: any) {
    if (this.expandedRow != null) {
      // clear old content
      this.rowContainers.toArray()[this.expandedRow].clear();
    }

    if (this.expandedRow === index) {
      this.expandedRow = null;
    } else {


      const container = this.rowContainers.toArray()[index];
      const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(component);
      const detailRowComponent = container.createComponent(factory);
      detailRowComponent.instance.data = this.dataSource.data[index];
      this.expandedRow = index;
    }
  }

    insertComponent2(index: number, component: any) {
        if (this.expandedRow != null) {
            // clear old content
            this.rowContainers2.toArray()[this.expandedRow].clear();
        }

        if (this.expandedRow === index) {
            this.expandedRow = null;
        } else {
            const container = this.rowContainers2.toArray()[index];
            const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(component);
            const basiccomponent = container.createComponent(factory);
            basiccomponent.instance.data = this.dataSource.data[index];
            console.log(basiccomponent.instance.data);

            this.expandedRow = index;
        }
    }

  onEdit = (e, v) => {
    alert(v);
  }

  protected handleRowClick = (row, event) => {
      console.log(event);
     console.log(event.target.lastChild);
  }
}


const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', icon: 'https://cdn3.iconfinder.com/data/icons/alcohol/PNG/Burn.png'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', icon: 'https://cdn3.iconfinder.com/data/icons/alcohol/PNG/Info.png'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', icon: 'https://cdn3.iconfinder.com/data/icons/alcohol/PNG/Manual.png'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', icon: 'https://cdn3.iconfinder.com/data/icons/alcohol/PNG/Search.png'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', icon: 'https://cdn3.iconfinder.com/data/icons/alcohol/PNG/Emulation2.png'}
];

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  icon: string;
}

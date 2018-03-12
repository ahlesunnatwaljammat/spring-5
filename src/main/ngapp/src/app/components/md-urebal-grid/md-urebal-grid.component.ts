import {Component, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource, MatSort, MatSnackBar, MatTable} from '@angular/material';
import {FormControl} from '@angular/forms';

/**
 * @title Basic table
 */
@Component({
  selector: 'app-urebal-grid',
  styleUrls: ['./md-urebal-grid.component.css'],
  templateUrl: './md-urebal-grid.component.html',
})
export class MdUrebalGridComponent {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Element>;

  isReadOnly = true;
  headerSearchable = false;

  columns = new FormControl();

  filterValues: any[] = ['', '', '', ''];
  searchType = '1';

  displayedColumns = ['position', 'name', 'weight', 'symbol', 'action'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  columnList = Object.assign([], this.displayedColumns);

  constructor(public snackBar: MatSnackBar) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string, dataField: any) {

    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    // this.dataSource.filterPredicate = (data, filterValue) => data[dataField] == filterValue || String(data[dataField]).toLowerCase().indexOf(filterValue) > -1; // search for filterValue Like/contains
    // this.dataSource.filter = filterValue;

    let columnIndex = this.displayedColumns.indexOf(dataField);
    this.filterValues[columnIndex] = filterValue;

    let combineFilterValue = '';
    for (let index = 0; index < this.filterValues.length; index++) {
      combineFilterValue +=  this.filterValues[index] + '$';
    }

    if(combineFilterValue.indexOf('$')> -1)
    {
      combineFilterValue = combineFilterValue.slice(0, -1);
    }

    this.dataSource.filterPredicate = (data, filter) => {
      const filterArray = filter.split('$');
        return (!filterArray[0] || String(data.position).toLowerCase().indexOf(filterArray[0].trim().toLowerCase()) > -1) &&
          (!filterArray[1] || String(data.name).toLowerCase().indexOf(filterArray[1].trim().toLowerCase()) > -1) &&
          (!filterArray[2] || String(data.weight).toLowerCase().indexOf(filterArray[2].trim().toLowerCase()) > -1) &&
          (!filterArray[3] || String(data.symbol).toLowerCase().indexOf(filterArray[3].trim().toLowerCase()) > -1);

    };

    this.dataSource.filter = combineFilterValue;
  }

  getValue(rowData: any, action: any)
  {
    console.log('Action: ' + action + ' is clicked!');
    console.log(rowData);
    this.openSnackBar('Action: ' + action + ' is clicked! \n' +  JSON.stringify(rowData), 'OK');
  }

  toggleFormMode()
  {
    this.isReadOnly = !this.isReadOnly;
  }

  updateDataSource(row: any, newValue: any)
  {
      let msg = 'Your current datasource has been updated! ';

      let oldRow: Element = ELEMENT_DATA.find(ele => ele.position == row.position);
      let positionOldValue = oldRow.position;
      msg += 'data before modify: ' + JSON.stringify(oldRow);

      oldRow.position = newValue;
      let newRow: Element = ELEMENT_DATA.find(ele => ele.position == newValue);
      msg += 'data after modify: ' + JSON.stringify(newRow);

      if(positionOldValue != newValue)
      {
        this.openSnackBar(msg, 'OK');
      }
  }

  enableColumnSearch()
  {
    this.headerSearchable = !this.headerSearchable;

    // reset datasource to it original state
    this.dataSource.filter = null;

    // disable sorting while header column search is enabled
    this.sort.disabled = this.headerSearchable;

    //this.dataSource.sort = this.sort;
    let positionSort = this.sort.sortables.get('position');

    //reset grid sort to S.No column
    this.dataSource.sort.direction = "desc";
    this.dataSource.sort.sort(positionSort);
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }

  printGrid()
  {
      const mywindow = window.open('', 'PRINT', 'height=600,width=850');

      let reportHTML: string;

      reportHTML = '<html>';
      reportHTML += '<head>';
      reportHTML += `<style>
      table {
          font-family: arial, sans-serif;
          border-collapse: collapse;
          width: 100%;
      }
      
      td, th {
          border: 1px solid #dddddd;
          text-align: center;
          padding: 8px;
      }
      
      tr:nth-child(even) {
          background-color: #dddddd;
      }
      </style>`;
      reportHTML += '</head>';
      reportHTML += '</body>';
      reportHTML += '<div style="text-align: center; width: 100%"><h2>Elements Report</h2></div>';

      reportHTML += '<table>';
      reportHTML += '<tr>';
      reportHTML += '<th>';
      reportHTML += 'S.No.';
      reportHTML += '</th>';
      reportHTML += '<th>';
      reportHTML += 'Name';
      reportHTML += '</th>';
      reportHTML += '<th>';
      reportHTML += 'Weight';
      reportHTML += '</th>';
      reportHTML += '<th>';
      reportHTML += 'Symbol';
      reportHTML += '</th>';
      reportHTML += '</tr>';

      this.dataSource.data.forEach(element => {
        reportHTML += '<tr>';
        reportHTML += '<td>';
        reportHTML += element.position;
        reportHTML += '</td>';
        reportHTML += '<td>';
        reportHTML += element.name;
        reportHTML += '</td>';
        reportHTML += '<td>';
        reportHTML += element.weight;
        reportHTML += '</td>';
        reportHTML += '<td>';
        reportHTML += element.symbol;
        reportHTML += '</td>';
        reportHTML += '</tr>';
    });

      reportHTML += '</table>';

      reportHTML += '</body>';
      reportHTML += '</html>';

      mywindow.document.write(reportHTML);

      setTimeout(function()
      {
        mywindow.document.close(); // necessary for IE >= 10
        mywindow.focus(); // necessary for IE >= 10*/

        mywindow.print();
        mywindow.close();
      }, 100);

      return true;
  }

}

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];

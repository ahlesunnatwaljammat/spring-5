import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <mat-toolbar color="primary">
      <mat-toolbar-row>
        <span>Angular Material</span>&nbsp;
        <button mat-button routerLink="/wiki/list">Wiki</button>
        <button mat-button routerLink="/wiki/add">Add Wiki</button>
        <div style="text-align: right; width: 100%;">
        <a mat-button [matMenuTriggerFor]="menu">Demos</a>
        <mat-menu #menu="matMenu">
          <a mat-menu-item [routerLink]="['/login']">Login</a>
          <a mat-menu-item [routerLink]="['/lazy-demo-1']">Lazy Demo 1</a>
          <a mat-menu-item [routerLink]="['/lazy-demo-2']">Lazy Demo 2</a>
          <a mat-menu-item [routerLink]="['/data-table']">Data Table Demo</a>
          <a mat-menu-item [routerLink]="['/edit-data-table']">Edit Data Table Demo</a>
          <a mat-menu-item [routerLink]="['/nested-table']">Nested Table Demo</a>
          <a mat-menu-item [routerLink]="['/wiki']">Wiki Home</a>
        </mat-menu>
        </div>
      </mat-toolbar-row>
    </mat-toolbar>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}

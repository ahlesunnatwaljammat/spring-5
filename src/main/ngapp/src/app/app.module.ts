import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule, MatTableModule, MatMenuModule, MatPaginatorModule, MatSortModule,
  MatProgressSpinnerModule, MatProgressBarModule, MatToolbarModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatSelectModule,
  MatOptionModule, MatTooltipModule, MatIconModule, MatSnackBarModule, MatGridListModule, MatTabsModule, MatCheckboxModule
} from '@angular/material';

import { ChartsModule } from 'ng2-charts';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LazyTable1Component } from './components/lazy-table-1/lazy-table-1.component';
import { HeaderComponent } from './components/header/header.component';
import {AppRoutingModule} from './app-routing.module';
import { LazyTable2Component } from './components/lazy-table-2/lazy-table-2.component';
import {HttpClientModule} from '@angular/common/http';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import { EditTableComponent } from './components/edit-table/edit-table.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MdUrebalGridComponent} from './components/md-urebal-grid/md-urebal-grid.component';
import {PieChartComponent} from './components/nested-table/pie-chart/pie-chart.component';
import {BasicGridComponent} from './components/nested-table/basic-grid/basic-grid.component';
import {DetailRowComponent} from './components/nested-table/detail-row/detail-row.component';
import {NestedTableComponent} from './components/nested-table/nested-table.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LazyTable1Component,
    HeaderComponent,
    LazyTable2Component,
    EditTableComponent,
    MdUrebalGridComponent,
    NestedTableComponent,
    PieChartComponent,
    DetailRowComponent,
    BasicGridComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatTableModule, MatPaginatorModule, MatFormFieldModule, MatInputModule, MatCheckboxModule, MatTabsModule, MatGridListModule,
    MatSelectModule, MatOptionModule, ReactiveFormsModule, MatSortModule, MatTooltipModule, MatMenuModule,
    MatIconModule, MatSnackBarModule, MatGridListModule, MatMenuModule, MatCardModule, MatToolbarModule, MatDividerModule, MatFormFieldModule,
    MatTableModule, MatPaginatorModule, MatSortModule,
    MatProgressSpinnerModule, MatProgressBarModule,
    InfiniteScrollModule, ChartsModule, HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent, DetailRowComponent, BasicGridComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {LazyTable1Component} from './components/lazy-table-1/lazy-table-1.component';
import {LazyTable2Component} from './components/lazy-table-2/lazy-table-2.component';
import {EditTableComponent} from './components/edit-table/edit-table.component';
import {MdUrebalGridComponent} from './components/md-urebal-grid/md-urebal-grid.component';
import {NestedTableComponent} from './components/nested-table/nested-table.component';



const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'lazy-demo-1', component: LazyTable1Component },
  { path: 'lazy-demo-2', component: LazyTable2Component },
  { path: 'data-table', component: EditTableComponent },
  { path: 'edit-data-table', component: MdUrebalGridComponent },
  { path: 'nested-table', component: NestedTableComponent },
  { path: 'wiki', loadChildren: 'app/components/wiki/wiki.module#WikiModule' }
];


@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
  declarations: []
})
export class AppRoutingModule { }

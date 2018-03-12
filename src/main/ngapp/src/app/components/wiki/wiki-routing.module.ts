import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WikiListComponent} from './wiki-list/wiki-list.component';
import {WikiAddComponent} from './wiki-add/wiki-add.component';

const routes: Routes = [
  {
    path: '', component: WikiListComponent
  }, {
    path: 'list', component: WikiListComponent
  }, {
    path: 'add', component: WikiAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WikiRoutingModule { }

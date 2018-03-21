import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AutocompleteDemo1Component} from "./autocomplete-demo1/autocomplete-demo1.component";
import {AutocompleteDemo2Component} from "./autocomplete-demo2/autocomplete-demo2.component";

const routes: Routes = [
  {
    path: '', component: AutocompleteDemo1Component
  },{
    path: 'demo2', component: AutocompleteDemo2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutocompleteRoutingModule { }

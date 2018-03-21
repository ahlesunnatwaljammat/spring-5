import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AutocompleteRoutingModule } from './autocomplete-routing.module';

import {
  MatAutocompleteModule, MatCardModule, MatFormFieldModule, MatInputModule, MatOptionModule,
  MatSlideToggleModule
} from "@angular/material";

import { AutocompleteDemo1Component } from './autocomplete-demo1/autocomplete-demo1.component';
import { AutocompleteDemo2Component } from './autocomplete-demo2/autocomplete-demo2.component';

@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    AutocompleteRoutingModule, MatAutocompleteModule, MatSlideToggleModule, MatFormFieldModule, MatInputModule,
    MatOptionModule, MatCardModule
  ],
  declarations: [AutocompleteDemo1Component, AutocompleteDemo1Component, AutocompleteDemo2Component]
})
export class AutocompleteModule { }

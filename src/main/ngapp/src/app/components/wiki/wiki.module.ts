import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WikiRoutingModule } from './wiki-routing.module';
import { WikiListComponent } from './wiki-list/wiki-list.component';
import { WikiAddComponent } from './wiki-add/wiki-add.component';

@NgModule({
  imports: [
    CommonModule,
    WikiRoutingModule
  ],
  declarations: [WikiListComponent, WikiAddComponent]
})
export class WikiModule { }

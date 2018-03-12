import { Component, Input, ComponentFactoryResolver, ComponentFactory, } from '@angular/core';

@Component({
  selector: 'app-detail-row',
  templateUrl: './detail-row.component.html',
  styleUrls: ['./detail-row.component.css']
})
export class DetailRowComponent{

    @Input() data: any;

    
 
}

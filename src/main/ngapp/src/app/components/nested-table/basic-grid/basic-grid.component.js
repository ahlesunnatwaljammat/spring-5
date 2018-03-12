"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var material_1 = require("@angular/material");
var BasicGridComponent = (function () {
    function BasicGridComponent() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol', 'action'];
        this.dataSource = new material_1.MatTableDataSource(DATA);
        console.log(this.dataSource);
    }
    BasicGridComponent.prototype.ngOnInit = function () {
    };
    return BasicGridComponent;
}());
__decorate([
    core_1.Input()
], BasicGridComponent.prototype, "data");
BasicGridComponent = __decorate([
    core_1.Component({
        selector: 'app-basic-grid',
        templateUrl: './basic-grid.component.html',
        styleUrls: ['./basic-grid.component.css']
    })
], BasicGridComponent);
exports.BasicGridComponent = BasicGridComponent;
var DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', icon: 'https://imgc.allpostersimages.com/img/posters/titanic_u-L-F4S6CQ0.jpg?src=gp&w=300&h=375' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', icon: 'https://imgc.allpostersimages.com/img/posters/lady-bird_u-L-F97PEQ0.jpg?src=gp&w=300&h=375' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', icon: 'https://imgc.allpostersimages.com/img/posters/the-godfather_u-L-EZ2740.jpg?src=gp&w=300&h=375' },
];

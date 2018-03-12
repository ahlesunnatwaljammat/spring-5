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
var detail_row_component_1 = require("./detail-row/detail-row.component");
var basic_grid_component_1 = require("./basic-grid/basic-grid.component");
var AppComponent = (function () {
    function AppComponent(resolver) {
        this.resolver = resolver;
        this.title = 'app';
        this.displayedColumns = ['position', 'chart', 'icon', 'name', 'weight', 'symbol', 'action'];
        this.dataSource = new material_1.MatTableDataSource(ELEMENT_DATA);
        this.detailComponent = detail_row_component_1.DetailRowComponent;
        this.basicComponent = basic_grid_component_1.BasicGridComponent;
        this.onEdit = function (e, v) {
            alert(v);
        };
        this.handleRowClick = function (row, event) {
            console.log(event);
            console.log(event.target.lastChild);
        };
    }
    AppComponent.prototype.insertComponent = function (index, component) {
        if (this.expandedRow != null) {
            // clear old content
            this.rowContainers.toArray()[this.expandedRow].clear();
        }
        if (this.expandedRow === index) {
            this.expandedRow = null;
        }
        else {
            var container = this.rowContainers.toArray()[index];
            var factory = this.resolver.resolveComponentFactory(component);
            var detailRowComponent = container.createComponent(factory);
            detailRowComponent.instance.data = this.dataSource.data[index];
            this.expandedRow = index;
        }
    };
    AppComponent.prototype.insertComponent2 = function (index, component) {
        if (this.expandedRow != null) {
            // clear old content
            this.rowContainers2.toArray()[this.expandedRow].clear();
        }
        if (this.expandedRow === index) {
            this.expandedRow = null;
        }
        else {
            var container = this.rowContainers2.toArray()[index];
            var factory = this.resolver.resolveComponentFactory(component);
            var basiccomponent = container.createComponent(factory);
            basiccomponent.instance.data = this.dataSource.data[index];
            console.log(basiccomponent.instance.data);
            this.expandedRow = index;
        }
    };
    return AppComponent;
}());
__decorate([
    core_1.ViewChildren('tableRow', { read: core_1.ViewContainerRef })
], AppComponent.prototype, "rowContainers");
__decorate([
    core_1.ViewChildren('tableRow2', { read: core_1.ViewContainerRef })
], AppComponent.prototype, "rowContainers2");
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['../../../../temp/app.component.css', '../assets/default.scss']
    })
], AppComponent);
exports.AppComponent = AppComponent;
var ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', icon: 'https://cdn3.iconfinder.com/data/icons/alcohol/PNG/Burn.png' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', icon: 'https://cdn3.iconfinder.com/data/icons/alcohol/PNG/Info.png' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', icon: 'https://cdn3.iconfinder.com/data/icons/alcohol/PNG/Manual.png' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', icon: 'https://cdn3.iconfinder.com/data/icons/alcohol/PNG/Search.png' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', icon: 'https://cdn3.iconfinder.com/data/icons/alcohol/PNG/Emulation2.png' }
];

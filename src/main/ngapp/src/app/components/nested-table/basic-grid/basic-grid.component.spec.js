"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var basic_grid_component_1 = require("./basic-grid.component");
describe('BasicGridComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [basic_grid_component_1.BasicGridComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(basic_grid_component_1.BasicGridComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});

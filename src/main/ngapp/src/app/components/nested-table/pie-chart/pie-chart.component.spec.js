"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var pie_chart_component_1 = require("./pie-chart.component");
describe('PieChartComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [pie_chart_component_1.PieChartComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(pie_chart_component_1.PieChartComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});

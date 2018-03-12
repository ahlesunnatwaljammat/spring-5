import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyTable2Component } from './lazy-table-2.component';

describe('LazyTable2Component', () => {
  let component: LazyTable2Component;
  let fixture: ComponentFixture<LazyTable2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyTable2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyTable2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

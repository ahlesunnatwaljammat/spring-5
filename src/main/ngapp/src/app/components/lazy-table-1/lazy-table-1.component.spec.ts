import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyTable1Component } from './lazy-table-1.component';

describe('LazyTable1Component', () => {
  let component: LazyTable1Component;
  let fixture: ComponentFixture<LazyTable1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyTable1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyTable1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

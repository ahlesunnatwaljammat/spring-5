import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteDemo2Component } from './autocomplete-demo2.component';

describe('AutocompleteDemo2Component', () => {
  let component: AutocompleteDemo2Component;
  let fixture: ComponentFixture<AutocompleteDemo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutocompleteDemo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteDemo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

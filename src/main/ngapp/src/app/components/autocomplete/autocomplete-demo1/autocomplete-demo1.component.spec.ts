import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteDemo1Component } from './autocomplete-demo1.component';

describe('AutocompleteDemo1Component', () => {
  let component: AutocompleteDemo1Component;
  let fixture: ComponentFixture<AutocompleteDemo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutocompleteDemo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

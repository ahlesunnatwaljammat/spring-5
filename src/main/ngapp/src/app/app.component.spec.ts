import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {MatCardModule, MatDivider, MatDividerModule, MatMenuModule, MatToolbarModule} from '@angular/material';
import {HeaderComponent} from './components/header/header.component';
import {RouterModule} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';

fdescribe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent
      ],
      imports: [
        MatDividerModule,
        MatCardModule,
        MatMenuModule,
        MatToolbarModule,
        RouterTestingModule
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});

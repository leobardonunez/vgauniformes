import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgNavbarComponent } from './svg-navbar.component';

describe('SvgNavbarComponent', () => {
  let component: SvgNavbarComponent;
  let fixture: ComponentFixture<SvgNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageNavbarComponent } from './image-navbar.component';

describe('ImageNavbarComponent', () => {
  let component: ImageNavbarComponent;
  let fixture: ComponentFixture<ImageNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

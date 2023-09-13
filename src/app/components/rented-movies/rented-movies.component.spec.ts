import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentedMoviesComponent } from './rented-movies.component';

describe('RentedMoviesComponent', () => {
  let component: RentedMoviesComponent;
  let fixture: ComponentFixture<RentedMoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RentedMoviesComponent]
    });
    fixture = TestBed.createComponent(RentedMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

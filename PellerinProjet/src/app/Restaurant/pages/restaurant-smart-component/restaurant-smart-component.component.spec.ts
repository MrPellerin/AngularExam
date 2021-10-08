import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantSmartComponentComponent } from './restaurant-smart-component.component';

describe('RestaurantSmartComponentComponent', () => {
  let component: RestaurantSmartComponentComponent;
  let fixture: ComponentFixture<RestaurantSmartComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantSmartComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantSmartComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

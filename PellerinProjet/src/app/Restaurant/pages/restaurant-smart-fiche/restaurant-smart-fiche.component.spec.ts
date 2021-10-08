import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantSmartFicheComponent } from './restaurant-smart-fiche.component';

describe('RestaurantSmartFicheComponent', () => {
  let component: RestaurantSmartFicheComponent;
  let fixture: ComponentFixture<RestaurantSmartFicheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantSmartFicheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantSmartFicheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

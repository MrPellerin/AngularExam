import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantFicheComponent } from './restaurant-fiche.component';

describe('RestaurantFicheComponent', () => {
  let component: RestaurantFicheComponent;
  let fixture: ComponentFixture<RestaurantFicheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantFicheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantFicheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

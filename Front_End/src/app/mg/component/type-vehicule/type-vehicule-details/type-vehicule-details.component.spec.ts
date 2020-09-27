import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeVehiculeDetailsComponent } from './type-vehicule-details.component';

describe('TypeVehiculeDetailsComponent', () => {
  let component: TypeVehiculeDetailsComponent;
  let fixture: ComponentFixture<TypeVehiculeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeVehiculeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeVehiculeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

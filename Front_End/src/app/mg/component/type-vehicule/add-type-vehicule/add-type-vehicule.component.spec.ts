import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTypeVehiculeComponent } from './add-type-vehicule.component';

describe('AddTypeVehiculeComponent', () => {
  let component: AddTypeVehiculeComponent;
  let fixture: ComponentFixture<AddTypeVehiculeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTypeVehiculeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTypeVehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

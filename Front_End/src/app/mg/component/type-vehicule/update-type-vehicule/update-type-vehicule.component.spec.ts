import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTypeVehiculeComponent } from './update-type-vehicule.component';

describe('UpdateTypeVehiculeComponent', () => {
  let component: UpdateTypeVehiculeComponent;
  let fixture: ComponentFixture<UpdateTypeVehiculeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTypeVehiculeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTypeVehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

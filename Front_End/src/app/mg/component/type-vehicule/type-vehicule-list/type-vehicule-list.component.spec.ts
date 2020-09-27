import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeVehiculeListComponent } from './type-vehicule-list.component';

describe('TypeVehiculeListComponent', () => {
  let component: TypeVehiculeListComponent;
  let fixture: ComponentFixture<TypeVehiculeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeVehiculeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeVehiculeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

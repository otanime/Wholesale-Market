import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculeDetailsComponent } from './vehicule-details.component';

describe('VehiculeDetailsComponent', () => {
  let component: VehiculeDetailsComponent;
  let fixture: ComponentFixture<VehiculeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiculeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

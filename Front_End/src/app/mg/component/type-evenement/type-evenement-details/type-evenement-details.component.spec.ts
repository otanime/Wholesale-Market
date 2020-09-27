import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeEvenementDetailsComponent } from './type-evenement-details.component';

describe('TypeEvenementDetailsComponent', () => {
  let component: TypeEvenementDetailsComponent;
  let fixture: ComponentFixture<TypeEvenementDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeEvenementDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeEvenementDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

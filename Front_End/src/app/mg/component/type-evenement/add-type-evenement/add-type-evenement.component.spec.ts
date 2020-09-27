import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTypeEvenementComponent } from './add-type-evenement.component';

describe('AddTypeEvenementComponent', () => {
  let component: AddTypeEvenementComponent;
  let fixture: ComponentFixture<AddTypeEvenementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTypeEvenementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTypeEvenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

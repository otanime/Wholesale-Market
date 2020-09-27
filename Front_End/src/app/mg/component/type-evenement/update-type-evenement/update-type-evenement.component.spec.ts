import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTypeEvenementComponent } from './update-type-evenement.component';

describe('UpdateTypeEvenementComponent', () => {
  let component: UpdateTypeEvenementComponent;
  let fixture: ComponentFixture<UpdateTypeEvenementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTypeEvenementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTypeEvenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

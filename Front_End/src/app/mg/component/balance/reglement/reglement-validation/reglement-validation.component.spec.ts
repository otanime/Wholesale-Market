import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReglementValidationComponent } from './reglement-validation.component';

describe('ReglementValidationComponent', () => {
  let component: ReglementValidationComponent;
  let fixture: ComponentFixture<ReglementValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReglementValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReglementValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

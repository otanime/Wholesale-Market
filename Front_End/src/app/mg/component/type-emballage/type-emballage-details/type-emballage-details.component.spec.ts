import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeEmballageDetailsComponent } from './type-emballage-details.component';

describe('TypeEmballageDetailsComponent', () => {
  let component: TypeEmballageDetailsComponent;
  let fixture: ComponentFixture<TypeEmballageDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeEmballageDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeEmballageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTypeEmballageComponent } from './add-type-emballage.component';

describe('AddTypeEmballageComponent', () => {
  let component: AddTypeEmballageComponent;
  let fixture: ComponentFixture<AddTypeEmballageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTypeEmballageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTypeEmballageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSousTypeEmballageComponent } from './add-sous-type-emballage.component';

describe('AddSousTypeEmballageComponent', () => {
  let component: AddSousTypeEmballageComponent;
  let fixture: ComponentFixture<AddSousTypeEmballageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSousTypeEmballageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSousTypeEmballageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

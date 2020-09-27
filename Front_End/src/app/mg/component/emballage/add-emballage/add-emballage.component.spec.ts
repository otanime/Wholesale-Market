import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmballageComponent } from './add-emballage.component';

describe('AddEmballageComponent', () => {
  let component: AddEmballageComponent;
  let fixture: ComponentFixture<AddEmballageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEmballageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmballageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

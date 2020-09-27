import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTypeEmballageComponent } from './update-type-emballage.component';

describe('UpdateTypeEmballageComponent', () => {
  let component: UpdateTypeEmballageComponent;
  let fixture: ComponentFixture<UpdateTypeEmballageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTypeEmballageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTypeEmballageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

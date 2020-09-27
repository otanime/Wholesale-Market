import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSousTypeEmballageComponent } from './update-sous-type-emballage.component';

describe('UpdateSousTypeEmballageComponent', () => {
  let component: UpdateSousTypeEmballageComponent;
  let fixture: ComponentFixture<UpdateSousTypeEmballageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSousTypeEmballageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSousTypeEmballageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

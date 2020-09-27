import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SousTypeEmballageDetailsComponent } from './sous-type-emballage-details.component';

describe('SousTypeEmballageDetailsComponent', () => {
  let component: SousTypeEmballageDetailsComponent;
  let fixture: ComponentFixture<SousTypeEmballageDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SousTypeEmballageDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SousTypeEmballageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

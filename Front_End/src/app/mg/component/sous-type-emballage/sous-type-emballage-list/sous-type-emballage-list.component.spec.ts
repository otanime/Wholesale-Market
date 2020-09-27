import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SousTypeEmballageListComponent } from './sous-type-emballage-list.component';

describe('SousTypeEmballageListComponent', () => {
  let component: SousTypeEmballageListComponent;
  let fixture: ComponentFixture<SousTypeEmballageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SousTypeEmballageListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SousTypeEmballageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

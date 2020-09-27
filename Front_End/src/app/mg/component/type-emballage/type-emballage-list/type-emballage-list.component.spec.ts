import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeEmballageListComponent } from './type-emballage-list.component';

describe('TypeEmballageListComponent', () => {
  let component: TypeEmballageListComponent;
  let fixture: ComponentFixture<TypeEmballageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeEmballageListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeEmballageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

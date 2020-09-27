import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeEvenementListComponent } from './type-evenement-list.component';

describe('TypeEvenementListComponent', () => {
  let component: TypeEvenementListComponent;
  let fixture: ComponentFixture<TypeEvenementListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeEvenementListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeEvenementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

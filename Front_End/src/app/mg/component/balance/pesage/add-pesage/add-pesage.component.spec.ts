import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPesageComponent } from './add-pesage.component';

describe('AddPesageComponent', () => {
  let component: AddPesageComponent;
  let fixture: ComponentFixture<AddPesageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPesageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPesageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

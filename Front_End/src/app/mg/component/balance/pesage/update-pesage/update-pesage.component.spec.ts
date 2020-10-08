import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePesageComponent } from './update-pesage.component';

describe('UpdatePesageComponent', () => {
  let component: UpdatePesageComponent;
  let fixture: ComponentFixture<UpdatePesageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePesageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePesageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

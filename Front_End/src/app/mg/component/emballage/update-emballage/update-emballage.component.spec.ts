import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmballageComponent } from './update-emballage.component';

describe('UpdateEmballageComponent', () => {
  let component: UpdateEmballageComponent;
  let fixture: ComponentFixture<UpdateEmballageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateEmballageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEmballageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

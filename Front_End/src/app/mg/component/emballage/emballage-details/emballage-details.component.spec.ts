import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmballageDetailsComponent } from './emballage-details.component';

describe('EmballageDetailsComponent', () => {
  let component: EmballageDetailsComponent;
  let fixture: ComponentFixture<EmballageDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmballageDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmballageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

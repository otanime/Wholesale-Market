import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesageDetailsComponent } from './pesage-details.component';

describe('PesageDetailsComponent', () => {
  let component: PesageDetailsComponent;
  let fixture: ComponentFixture<PesageDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesageDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

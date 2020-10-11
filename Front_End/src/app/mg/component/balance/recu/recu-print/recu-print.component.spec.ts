import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuPrintComponent } from './recu-print.component';

describe('RecuPrintComponent', () => {
  let component: RecuPrintComponent;
  let fixture: ComponentFixture<RecuPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecuPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

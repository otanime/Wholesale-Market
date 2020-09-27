import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmballageListComponent } from './emballage-list.component';

describe('EmballageListComponent', () => {
  let component: EmballageListComponent;
  let fixture: ComponentFixture<EmballageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmballageListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmballageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

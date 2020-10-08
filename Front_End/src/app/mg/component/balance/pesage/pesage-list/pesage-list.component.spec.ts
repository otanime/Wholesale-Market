import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesageListComponent } from './pesage-list.component';

describe('PesageListComponent', () => {
  let component: PesageListComponent;
  let fixture: ComponentFixture<PesageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesageListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

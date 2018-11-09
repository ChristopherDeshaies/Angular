import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisibleAdminComponent } from './visible-admin.component';

describe('VisibleAdminComponent', () => {
  let component: VisibleAdminComponent;
  let fixture: ComponentFixture<VisibleAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisibleAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisibleAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

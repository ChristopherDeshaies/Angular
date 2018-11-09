import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptdetailadminComponentComponent } from './comptdetailadmin-component.component';

describe('ComptdetailadminComponentComponent', () => {
  let component: ComptdetailadminComponentComponent;
  let fixture: ComponentFixture<ComptdetailadminComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComptdetailadminComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComptdetailadminComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

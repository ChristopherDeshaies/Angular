import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompadaminComponentComponent } from './compadamin-component.component';

describe('CompadaminComponentComponent', () => {
  let component: CompadaminComponentComponent;
  let fixture: ComponentFixture<CompadaminComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompadaminComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompadaminComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

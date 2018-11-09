import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompparentComponentComponent } from './compparent-component.component';

describe('CompparentComponentComponent', () => {
  let component: CompparentComponentComponent;
  let fixture: ComponentFixture<CompparentComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompparentComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompparentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

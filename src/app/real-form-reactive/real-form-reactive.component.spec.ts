import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealFormReactiveComponent } from './real-form-reactive.component';

describe('RealFormReactiveComponent', () => {
  let component: RealFormReactiveComponent;
  let fixture: ComponentFixture<RealFormReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealFormReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealFormReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

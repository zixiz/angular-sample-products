import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReactivComponent } from './form-reactiv.component';

describe('FormReactivComponent', () => {
  let component: FormReactivComponent;
  let fixture: ComponentFixture<FormReactivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormReactivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormReactivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

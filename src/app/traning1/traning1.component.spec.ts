import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Traning1Component } from './traning1.component';

describe('Traning1Component', () => {
  let component: Traning1Component;
  let fixture: ComponentFixture<Traning1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Traning1Component]
    });
    fixture = TestBed.createComponent(Traning1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

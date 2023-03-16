import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Singlepg1Component } from './singlepg1.component';

describe('Singlepg1Component', () => {
  let component: Singlepg1Component;
  let fixture: ComponentFixture<Singlepg1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Singlepg1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Singlepg1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

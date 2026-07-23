import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componentlogin } from './componentlogin';

describe('Componentlogin', () => {
  let component: Componentlogin;
  let fixture: ComponentFixture<Componentlogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componentlogin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componentlogin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

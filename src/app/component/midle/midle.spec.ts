import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Midle } from './midle';

describe('Midle', () => {
  let component: Midle;
  let fixture: ComponentFixture<Midle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Midle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Midle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

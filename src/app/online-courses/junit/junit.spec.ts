import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JUnit } from './junit';

describe('JUnit', () => {
  let component: JUnit;
  let fixture: ComponentFixture<JUnit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JUnit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JUnit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

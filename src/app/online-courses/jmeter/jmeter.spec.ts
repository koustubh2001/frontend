import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JMeter } from './jmeter';

describe('JMeter', () => {
  let component: JMeter;
  let fixture: ComponentFixture<JMeter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JMeter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JMeter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

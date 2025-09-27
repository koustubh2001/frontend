import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AIML } from './ai-ml';

describe('AIML', () => {
  let component: AIML;
  let fixture: ComponentFixture<AIML>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AIML]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AIML);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

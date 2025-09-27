import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AITesting } from './aitesting';

describe('AITesting', () => {
  let component: AITesting;
  let fixture: ComponentFixture<AITesting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AITesting]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AITesting);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

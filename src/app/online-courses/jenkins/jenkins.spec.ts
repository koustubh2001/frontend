import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jenkins } from './jenkins';

describe('Jenkins', () => {
  let component: Jenkins;
  let fixture: ComponentFixture<Jenkins>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Jenkins]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jenkins);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

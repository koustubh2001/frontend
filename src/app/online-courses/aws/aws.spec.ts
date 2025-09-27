import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AWS } from './aws';

describe('AWS', () => {
  let component: AWS;
  let fixture: ComponentFixture<AWS>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AWS]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AWS);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

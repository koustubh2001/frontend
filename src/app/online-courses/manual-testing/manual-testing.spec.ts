import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualTesting } from './manual-testing';

describe('ManualTesting', () => {
  let component: ManualTesting;
  let fixture: ComponentFixture<ManualTesting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManualTesting]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManualTesting);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

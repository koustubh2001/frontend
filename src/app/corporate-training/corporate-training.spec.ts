import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateTraining } from './corporate-training';

describe('CorporateTraining', () => {
  let component: CorporateTraining;
  let fixture: ComponentFixture<CorporateTraining>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorporateTraining]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorporateTraining);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

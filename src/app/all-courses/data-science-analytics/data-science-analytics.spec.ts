import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataScienceAnalytics } from './data-science-analytics';

describe('DataScienceAnalytics', () => {
  let component: DataScienceAnalytics;
  let fixture: ComponentFixture<DataScienceAnalytics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataScienceAnalytics]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataScienceAnalytics);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

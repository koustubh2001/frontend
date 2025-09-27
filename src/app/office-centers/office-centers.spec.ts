import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeCenters } from './office-centers';

describe('OfficeCenters', () => {
  let component: OfficeCenters;
  let fixture: ComponentFixture<OfficeCenters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfficeCenters]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficeCenters);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

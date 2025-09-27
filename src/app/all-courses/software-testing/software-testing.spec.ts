import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareTesting } from './software-testing';

describe('SoftwareTesting', () => {
  let component: SoftwareTesting;
  let fixture: ComponentFixture<SoftwareTesting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareTesting]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwareTesting);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

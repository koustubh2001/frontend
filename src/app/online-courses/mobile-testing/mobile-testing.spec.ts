import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileTesting } from './mobile-testing';

describe('MobileTesting', () => {
  let component: MobileTesting;
  let fixture: ComponentFixture<MobileTesting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileTesting]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileTesting);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

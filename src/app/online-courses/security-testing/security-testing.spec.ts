import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityTesting } from './security-testing';

describe('SecurityTesting', () => {
  let component: SecurityTesting;
  let fixture: ComponentFixture<SecurityTesting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecurityTesting]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityTesting);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

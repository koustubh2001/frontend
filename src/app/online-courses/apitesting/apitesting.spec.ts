import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APITesting } from './apitesting';

describe('APITesting', () => {
  let component: APITesting;
  let fixture: ComponentFixture<APITesting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [APITesting]
    })
    .compileComponents();

    fixture = TestBed.createComponent(APITesting);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

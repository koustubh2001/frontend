import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineCourses } from './online-courses';

describe('OnlineCourses', () => {
  let component: OnlineCourses;
  let fixture: ComponentFixture<OnlineCourses>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnlineCourses]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlineCourses);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

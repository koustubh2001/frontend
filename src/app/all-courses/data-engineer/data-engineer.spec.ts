import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataEngineer } from './data-engineer';

describe('DataEngineer', () => {
  let component: DataEngineer;
  let fixture: ComponentFixture<DataEngineer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataEngineer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataEngineer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

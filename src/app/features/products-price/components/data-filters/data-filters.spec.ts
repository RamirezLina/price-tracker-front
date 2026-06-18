import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataFilters } from './data-filters';

describe('DataFilters', () => {
  let component: DataFilters;
  let fixture: ComponentFixture<DataFilters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataFilters],
    }).compileComponents();

    fixture = TestBed.createComponent(DataFilters);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayPricePage } from './today-price-page';

describe('TodayPricePage', () => {
  let component: TodayPricePage;
  let fixture: ComponentFixture<TodayPricePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodayPricePage],
    }).compileComponents();

    fixture = TestBed.createComponent(TodayPricePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

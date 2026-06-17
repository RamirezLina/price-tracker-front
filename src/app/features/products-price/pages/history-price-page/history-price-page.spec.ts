import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryPricePage } from './history-price-page';

describe('HistoryPricePage', () => {
  let component: HistoryPricePage;
  let fixture: ComponentFixture<HistoryPricePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoryPricePage],
    }).compileComponents();

    fixture = TestBed.createComponent(HistoryPricePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

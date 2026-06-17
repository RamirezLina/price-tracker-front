import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrapProductPage } from './scrap-product-page';

describe('ScrapProductPage', () => {
  let component: ScrapProductPage;
  let fixture: ComponentFixture<ScrapProductPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrapProductPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ScrapProductPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, signal } from '@angular/core';
import { DataFilters } from "../../components/data-filters/data-filters";
import { ViewModeValue } from '../../models/representation-type.model';
import { ViewModeSelector } from "../../components/view-mode-selector/view-mode-selector";
import { ProductItem } from '../../models/product.model';
import { StoreItem } from '../../models/store.model';

@Component({
  selector: 'app-today-price-page',
  imports: [DataFilters, ViewModeSelector],
  templateUrl: './today-price-page.html',
  styleUrl: './today-price-page.css',
})
export class TodayPricePage {

  viewMode = signal<ViewModeValue>('table');
  storesFilter = signal<StoreItem[]>([]);
  productsFilter = signal<ProductItem[]>([]);

}

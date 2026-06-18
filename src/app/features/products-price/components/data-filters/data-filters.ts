import { Component, model } from '@angular/core';
import { ViewModeType, ViewModeValue } from '../../models/representation-type.model';
import { StoreItem } from '../../models/store.model';
import { ProductItem } from '../../models/product.model';

@Component({
  selector: 'gp-data-filters',
  imports: [],
  templateUrl: './data-filters.html',
  styleUrl: './data-filters.css',
})
export class DataFilters {
  selectedStores = model<StoreItem[]>();
  selectedProducts = model<ProductItem[]>();


}

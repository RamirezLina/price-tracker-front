import { Component } from '@angular/core';
import { SegmentedControl } from "../../../../shared/components/segmented-control/segmented-control";

@Component({
  selector: 'app-products-layout',
  imports: [SegmentedControl],
  templateUrl: './products-layout.html',
  styleUrl: './products-layout.css',
})
export class ProductsLayout { }

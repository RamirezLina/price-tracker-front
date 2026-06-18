import { Component } from '@angular/core';
import { SegmentedControl } from "../../../../shared/components/segmented-control/segmented-control";
import { SegmentedControlOption } from '../../../../shared/components/segmented-control/segmented-control.model';
import { RouterOutlet } from "@angular/router";
import { APP_ROUTE_LINKS } from '../../../../core/routing/app-routes';


@Component({
  selector: 'app-products-layout',
  imports: [SegmentedControl, RouterOutlet],
  templateUrl: './products-layout.html',
  styleUrl: './products-layout.css',
})
export class ProductsLayout {


  viewOptions: SegmentedControlOption[] = [
    { label: 'Today', route: APP_ROUTE_LINKS.productsTrackerToday },
    { label: 'History', route: APP_ROUTE_LINKS.productsTrackerHistory },
  ];
}

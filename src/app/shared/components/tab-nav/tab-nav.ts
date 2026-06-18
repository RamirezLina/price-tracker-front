import { Component, input } from '@angular/core';
import { SegmentedControlOption } from './tab-nav.model';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'ui-tab-nav',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './tab-nav.html',
  styleUrl: './tab-nav.css',
})
export class SegmentedControl {

  options = input.required<SegmentedControlOption[]>();

}

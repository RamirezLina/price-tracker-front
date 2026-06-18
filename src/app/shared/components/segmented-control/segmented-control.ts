import { Component, input } from '@angular/core';
import { SegmentedControlOption } from './segmented-control.model';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'ui-segmented-control',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './segmented-control.html',
  styleUrl: './segmented-control.css',
})
export class SegmentedControl {

  options = input.required<SegmentedControlOption[]>();

}

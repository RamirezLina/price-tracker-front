import { Component, input } from '@angular/core';
import { SegmentedControlOption } from './segmented-control-option';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-segmented-control',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './segmented-control.html',
  styleUrl: './segmented-control.css',
})
export class SegmentedControl {

  options = input.required<SegmentedControlOption[]>();

}

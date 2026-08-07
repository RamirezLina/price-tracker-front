import { Component, input, model } from '@angular/core';
import { SelectOption } from './select-option.model';

let nextSelectId = 0;

@Component({
  selector: 'gp-select-list',
  imports: [],
  templateUrl: './select-list.html',
  styleUrl: './select-list.css',
})
export class SelectList {
  readonly selectId = `gp-select-${nextSelectId++}`;

  label = input.required<string>();
  options = input.required<SelectOption[]>();

  controlName = input<string>('');
  placeholder = input<string | null>(null);

  value = model.required<string>();

  onChange (event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.value.set(select.value);
  }
}

import { Component, model } from '@angular/core';
import { ViewModeType, ViewModeValue } from '../../models/representation-type.model';

@Component({
  selector: 'gp-view-mode-selector',
  imports: [],
  templateUrl: './view-mode-selector.html',
  styleUrl: './view-mode-selector.css',
})
export class ViewModeSelector {
  selectedView = model.required<ViewModeValue>();

  representationOptions: ViewModeType[] = [
    { value: 'table', label: 'Tabla' },
    { value: 'chart', label: 'Gráfico' },
  ];
}

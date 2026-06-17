import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { APP_ROUTE_LINKS } from '../../routing/app-routes';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  protected readonly links = APP_ROUTE_LINKS;
  projectName = input<string>();
}

import { Component, input } from '@angular/core';

@Component({
  selector: 'app-shell',
  imports: [],
  templateUrl: './app-shell.html',
  styleUrl: './app-shell.css',
})
export class AppShell {
  projectName = input<string>();


}

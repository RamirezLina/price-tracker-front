import { Component, input } from '@angular/core';
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { Sidebar } from "../sidebar/sidebar";

@Component({
  selector: 'app-shell',
  imports: [Header, Footer, Sidebar],
  templateUrl: './app-shell.html',
  styleUrl: './app-shell.css',
})
export class AppShell {
  projectName = input<string>();


}

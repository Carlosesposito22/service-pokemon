import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./components/card/card.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardComponent],
  template: `
    <h1>Teste de Services</h1>
    <app-card [name]="'CHARMANDER'" [attributesTypes]="['FIRE', 'FLY']"></app-card>
    <router-outlet></router-outlet>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'service-pokemon';
}

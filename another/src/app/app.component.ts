import { Component, Injector } from '@angular/core';
import { NazaComponent } from './naza/naza.component';
import { createCustomElement } from '@angular/elements';

@Component({
  selector: 'sandia',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(injector: Injector) {
    // Convert `NazaComponent` to a custom element.
    const NazaElement = createCustomElement(NazaComponent, {injector});
    // Register the custom element with the browser.
    customElements.define('naza-element', NazaElement);
  }
}


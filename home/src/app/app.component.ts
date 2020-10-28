import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { HomeComponent } from './home/home/home.component';


@Component({
  selector: 'walla-walla',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(injector: Injector) {
    // // create OtroElement custom element.
    // const OtroElement = createCustomElement(HomeComponent, {injector});
    // // Register the HomeElement with the browser.
    // customElements.define('otro-element', OtroElement);
  }
}

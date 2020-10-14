import { BrowserModule } from '@angular/platform-browser';
import { DoBootstrap, Injector, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NazaComponent } from './naza/naza.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent,
    NazaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  entryComponents: [NazaComponent],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {}
  ngDoBootstrap(): void {
    customElements.define(
      // This tag we've have provided in `options.template` when called `singleSpaAngularElements`.
      'naza-element',
      createCustomElement(NazaComponent, { injector: this.injector }),
    );
  }
}

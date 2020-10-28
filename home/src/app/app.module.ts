import { BrowserModule } from '@angular/platform-browser';
import { DoBootstrap, Injector, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { createCustomElement } from '@angular/elements';
import { HomeModule } from '../app/home/home.module';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeModule
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  entryComponents: [
    HomeComponent
  ],
})

export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {}
  ngDoBootstrap(): void {
    customElements.define(
      // This tag we've have provided in `options.template` when called `singleSpaAngularElements`.
      'otro-element',
      createCustomElement(HomeComponent, { injector: this.injector }),
    );
  }
}

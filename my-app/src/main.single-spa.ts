
import { enableProdMode, NgZone } from '@angular/core';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Router } from '@angular/router';
//import { ɵAnimationEngine as AnimationEngine } from '@angular/animations/browser';

import { singleSpaAngular, getSingleSpaExtraProviders } from 'single-spa-angular';

//import 'zone.js/dist/zone';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { singleSpaPropsSubject } from './single-spa/single-spa-props';

if (environment.production) {
  enableProdMode();
}

const lifecycles = singleSpaAngular({
  bootstrapFunction: singleSpaProps => {
    singleSpaPropsSubject.next(singleSpaProps);
    //debugger;
    return platformBrowserDynamic(getSingleSpaExtraProviders()).bootstrapModule(AppModule);
  },
  template: '<my-app-root />',
  Router,
  NgZone,
  //AnimationEngine,
}) as {[key:string]: Function };

export const bootstrap = function(){
  //debugger;
  return lifecycles.bootstrap.apply(this, arguments);
}

export const mount = function() {
  //debugger;
  return lifecycles.mount.apply(this, arguments);
}

export const unmount = function() {
  //debugger;
  return lifecycles.unmount.apply(this, arguments);
}

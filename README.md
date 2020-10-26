# Single SPA Project

Este repositorio consta de una aplicación raíz **spa** generada con [Single-SPA CLI](https://single-spa.js.org/docs/create-single-spa).
Dicha aplicacion, se encarga de montar y desmontar aplicaciones frontend de manera agnostica al framework en el que se hayan desarrollado.
Para esto, es necesario que cada aplicación tenga un main con las funciones de `bootstrap`, `mount` y `unmount`.

A su vez, disponemos de 2 aplicaciones Angular, **my-app** y **another**, ambas generadas con [Angular CLI](https://github.com/angular/angular-cli) versión 10.0.4.

En la raíz de las 2 aplicaciones anteriormente mencionadas, corrimos el siguiente [comando](https://single-spa.js.org/docs/ecosystem-angular) `ng add single-spa-angular`.

Para el custom element

## Como levantar las aplicaciones

Las Apps que no traen server propio las estamos levantando con "serve". Un server liviano para nodejs

```bash
npm i -g serve
``` 

### Spa - Shell

Ingrese a la carpeta `spa` y ejecute `npm start`. Navegue a `http://localhost:9000/`.

### MyApp - App Angular tradicional

Ingrese a la carpeta `my-app` y ejecute `npm run serve:single-spa:my-app` para levantar la aplicacion.

### Another - App Angular Element

Ingrese a la carpeta `another` y ejecute `npm run serve:single-spa:another` para levantar la aplicacion.

### Web Components - Web component hecho a bajo nivel 

Ingrese a la carpeta `web-components` y ejecute `serve -C`.

### Shared - Servicio hecho a bajo nivel con TS stand alone

Ingrese a la carpeta `shared` y ejecute `serve -C -l 1234`.


## Links
* [SingleSpa: The Recommended Setup](https://single-spa.js.org/docs/recommended-setup/)
* [Referencia ImportMaps](https://github.com/WICG/import-maps)
* [Systemjs ImportMaps](https://github.com/systemjs/systemjs/blob/master/docs/import-maps.md)
* [What are CJS, AMD, UMD, and ESM in Javascript?](https://dev.to/iggredible/what-the-heck-are-cjs-amd-umd-and-esm-ikm)
* [Web Components](https://developer.mozilla.org/es/docs/Web/Web_Components)
* [WebPack: Module Federation](https://webpack.js.org/concepts/module-federation/)
* [Angular with Module Federation](https://www.angulararchitects.io/aktuelles/the-microfrontend-revolution-part-2-module-federation-with-angular/)
* [An ESM bundle for any NPM package](https://medium.com/@joeldenning/an-esm-bundle-for-any-npm-package-5f850db0e04d)
* [Tactical Domain-Driven Design with Angular and Monorepos?](https://www.angulararchitects.io/aktuelles/tactical-domain-driven-design-with-monorepos/)

## Opciones de implementación


* _SingleSPA_ / Shell Nativo  / Shell Angular

* MicroFront : AngularElements  / Angular Module Federation con Shell Angular / Angular SingleSPA / _AngularElements Single SPA_

* Carga del MF: 

* CodeSharing: Global / _ImportMap_ / Module Federation / *NADA*

* Estado Compartido: Servicio Angular publicado en NPM trabajando su estado en window compartida en lugar de this / Inyectar customProperty en singleSPA

* Features: Live Reload, Compilacion parcial, etc.

* Modularizacion: ECMA Script Modules, SystemJS, UMD (NodeJS + AMD)  

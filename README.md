# Single SPA Project

Este repositorio consta de una aplicacion raiz **spa** generada con [Single-SPA CLI](https://single-spa.js.org/docs/create-single-spa).
Dicha aplicacion, se encarga de montar y desmontar aplicaciones frontend de manera agnostica al framework en el que se hayan desarrollado.
Para esto, es necesario que cada aplicacion tenga un main con las funciones de `bootstrap`, `mount` y `unmount`.

A su vez, disponemos de 2 aplicaciones Angular, **my-app** y **another**, ambas generadas con [Angular CLI](https://github.com/angular/angular-cli) version 10.0.4.

En la raiz de las 2 aplicaciones anteriormente mencionadas, corrimos el siguiente [comando](https://single-spa.js.org/docs/ecosystem-angular) `ng add single-spa-angular`.

# Como levantar las aplicaciones

## MyApp

Ingrese a la carpeta `my-app` y ejecute `npm run serve:single-spa:my-app` para levantar la aplicacion.

## Another

Ingrese a la carpeta `another` y ejecute `npm run serve:single-spa:another` para levantar la aplicacion.

## Web Components

Ingrese a la carpeta `web-components` y ejecute `serve -C`.

## Shared

Ingrese a la carpeta `shared` y ejecute `serve -C -l 1234`.

## Spa

Ingrese a la carpeta `spa` y ejecute `npm start`. Navegue a `http://localhost:9000/`.
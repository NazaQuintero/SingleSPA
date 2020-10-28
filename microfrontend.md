## MicroFrontends

Dado el crecimiento de las aplicaciones de FrontEnd, así como también de los equipos que las mantienen, queda en evidencia la necesidad de hallar solución a cuestiones como la modularización, compilación, carga y puesta en producción para agilizar los procesos dentro del contexto de ICBC.

### Contexto actual

Actualmente, las aplicaciones de la organización, se encuentran desarrolladas en Angular(6+). Utilizan adicionalmente ngx-lucy, una librería de componentes visuales desarrollada in-house, que cubre la totalidad de la renderización de las pantallas.

En la medida que las aplicaciones existentes fueron creciendo, surgieron los siguientes incovenientes:

- Los tiempos de compilación se hicieron muy largos, disminuyendo la productividad en el desarrollo.
- Ante algún cambio pequeño en alguna pantalla, es necesario llevar a produción la totalidad de la aplicación para reflejarlo.
- Un cambio en una sección de la aplicación requiere certificar el correcto funcionamiento de la totalidad de la misma.
- Se generaron cuellos de botella en el ambiente de QA al habar más de un proyecto probándose al mismo tiempo.
- Se enlenteció la carga inicial de la aplición y aumentó su peso.

### Cómo resolverlo

Para mitigar estas cuestiones se analizarán diferentes posibilidades para dividir las aplicaciones, tradicionalmente monolíticas, en células independientes con bajo nivel de acoplamiento.
Dada la corta vida de las tecnologías de FrontEnd, es deseable que la solución permita los microfrontends no estén atados a un framework y versión particular. Así se podría hacer, por ejemplo, una migración en etapas a tecnologías más modernas.

### Estrategia

Un camino viable al momento de segmentar la aplicación es pensar en módulos por dominio de negocio e, internamente, una subdivisión en capas (UI, modelos, lógica de negocio, store y accesso a datos). A su vez, un conjuto de librerías core compartidas y un shell responsable del routeo principal.

Se deben tener en cuenta los siguientes aspectos:
- Shell
- Modularización / Empaquetamiento
- Enlazado de los módulos
- API de los módulos
- Carga
- Versionado en Repositorios
- Manejo de las dependencias compartidas

#### Shell

Al dividir la aplicación en partes surge la necesidad de tener un "shell" que se encargue del enrutamiento principal de la aplicación. 
Se relevaron las siguientes posibilidades:


* Shell Single SPA

Single SPA en es un framework para la creación de aplicaciones de MicroFrontend. Se encarga orquestar el montaje, desmontaje y carga de las células independientes en función a una URL dada. Cada una de ellas debe proveer una interfaz que implemente las funciones `mount`, `unmount` y `bootstrap`, pudiendo estar expuestas como:
- Angular Element + Interfaz de Single SPA
- Angular App + Interfaz de SingleSPA

* Shell Javascript con Router Vaadin
Consiste en cargar y montar Angular Elements utilizando el Router de Vaadin.

* Shell Angular
Una aplicación Angular que se encarga del router principal.
 
* Shell Angular con SingleSPA
Un shell Angular que gobierne a SingleSPA internamente dentro de un componente que funciona como Proxy


#### API de los módulos
Entre las opciones analizadas para la composición del 'Shell' y las células se encuentran:

* Angular Library por cada Microfrontend
Se descartó esta opción ya que Ivy hace imposible el uso de @angular/xxx dinámicamente (requiere de ngcc).

* Angular Apps con API SingleSPA
Cada uno de los Microfrontend es un app completa decorada con la API de SingleSPA

* Angular Modules (Module Federation)
Cada uno de los Microfrontend es un Módulo Angular (dentro de una app angular aparte) exportados como un remote de Module Federation.
Funcionan como un chunk de lazy loading tradicional, solo que se pueden deployar por separado y linkear dinámicamente.

* Angular Elements
Cada microfrontend es un AngularElement

* Angular Elements con Shell Angular SingleSpa + Module Federation
Una opción a probar (todavía no se experimentó) es la creación de microfrontends exportados como Angular Elements de SingleSPA.
Sería necesario cargar los core y las librerías compartidas valiéndose de Module Federation


#### Enlazado de los módulos
El CLI de Angular propone una compilación estática monolítica de la aplicación. Sin embargo, con Module Federation, es posible realizar cargas dinámicas de módulos.


#### Manejo de las dependencias compartidas

Al segmentar aparece la necesidad de usar librerías con la misma base de codigo y sin carga repetida. Y al mismo tiempo permitir versiones diferentes concurrentes de las mismas.
Este punto fue el que presentó mayor dificultad. Se analizaron las siguientes posibilidades:

* SystemJS con ImportMaps
Esta posibilidad fue descartada para librerías que dependen de angular ya que la compilación de compatibilidad con Ivy hace imposible su uso dinamicamente (Angular genera archivos que no existen en los paquetes originales de NPM).


* Module Federation
Parece ser una opcion viable, pero aún está en beta y no esta soportada oficialmente por el CLI Angular.
Requiere la versión 5.0 de WebPack y Angular CLI 11 + parches varios.

<!-- Las librerías compartidas pueden ser expuestas como módulos de NPM. -->


#### Versionado en Repositorios
<!--Monorepo Nx vs Multiples Repos -->
Aun no se evaluó en profundidad este tema. Quisiéramos saber que postura tienen frente a este punto.


## Referencias
* [SingleSpa: The Recommended Setup](https://single-spa.js.org/docs/recommended-setup/)
* [Referencia ImportMaps](https://github.com/WICG/import-maps)
* [Systemjs ImportMaps](https://github.com/systemjs/systemjs/blob/master/docs/import-maps.md)
* [WebPack: Module Federation](https://webpack.js.org/concepts/module-federation/)
* [Angular with Module Federation](https://www.angulararchitects.io/aktuelles/dynamic-module-federation-with-angular/)
* [An ESM bundle for any NPM package](https://medium.com/@joeldenning/an-esm-bundle-for-any-npm-package-5f850db0e04d)
* [Tactical Domain-Driven Design with Angular and Monorepos?](https://www.angulararchitects.io/aktuelles/tactical-domain-driven-design-with-monorepos/)
* [Angular +  Vaadin Router](https://github.com/kito99/micro-frontends-demo)


## Otras Opciones de implementación a tener en cuenta (TODO: Probar / Investigar)


*  Shell Angular + Monorepo + Librerias
    - MF: Libraries + 1 App por cada MF para levantarlo
    - Mono Repo: El tsconfig.json tiene los path para cada alias de libreria

*  Shell Angular + Monorepo 
    - MF: 1 App por cada MF para levantarlo
    - Mono Repo: El tsconfig.json tiene los path para una carpeta en particular dentro del MF

* Aplicacion Monolitica separada en modulos normales con lazy loading
    


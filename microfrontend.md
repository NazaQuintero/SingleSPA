## MicroFrontends

Dado el crecimiento de las aplicaciones de FrontEnd, así como también de los equipos que las mantienen, queda en evidencia la necesidad de hallar solución a cuestiones como la modularización, compilación, carga y puesta en producción para agilizar los procesos dentro del contexto de ICBC.

### Contexto actual

Actualmente, las aplicaciones de la organización, se encuentran desarrolladas en Angular(6+). Utilizan adicionalmente ngx-lucy, una libreria de componentes visuales desarrollada in-house, que cubre la totalidad de la renderización de las pantallas.

En la medida que las aplicaciones existentes fueron creciendo, surgieron los siguientes incovenientes:

- Los tiempos de compilación se hicieron muy largos, disminuyendo la productividad en el desarrollo.
- Ante algún cambio pequeño en alguna pantalla, es necesario llevar a produción la totalidad de la aplicación para reflejarlo.
- Un cambio en una sección de la aplicación requiere certificar el correcto funcionamiento de la totalidad de la misma.
- Se generaron cuellos de botella en el ambiente de QA al habar más de un proyecto probándose al mismo tiempo.
- Se enlenteció la carga inicial de la aplición y aumentó su peso.

### Cómo resolverlo

Para mitigar estas cuestiones se analizarán diferentes posibilidades para dividir las aplicaciones, tradicionalmente monolíticas, en células independientes con bajo nivel de acoplamiento.

### Estrategia

Un camino viable al momento de segmentar la aplicación es pensar en modulos por dominio de negocio e, internamente, una subdivision en capas (UI, modelos, logica de negocio, store y accesso a datos). A su vez, un conjuto de librerías core compartidas y un shell responsable del routeo principal.

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

FALTA DESCRIPCION

* Angular Apps
Cada uno de los Microfrontend es un app completa

* Angular Modules (Module Ferederation)
Cada uno de los Microfronted es un Módulo Angular (dentro de una app angular aparte) exportados como un remote de Module Ferederation.
Funcionan como un chunk de lazy loading tradicional, solo que se pueden deployar por separado y linkear dinámicamente.

* Angular Elements
Cada microfrontend es un Angular Element

* Angular Elements con Shell Angular SingleSpa + Module Federation
Una opción a probar (todavía no se experimentó) es la creación de microfrontends exportados como Angular Elements de SingleSPA.
Sería necesario cargar los core y las librerías compartidas valiéndose de Module Federation

* Angular Library

#### Enlazado de los módulos
<!--Estático, Dinamico -->
El CLI de Angular propone una compilación estática monolítica de la aplicación. Sin embargo, con Module Federation, es posible realizar cargas dinámicas de módulos.


#### Manejo de las dependencias compartidas

Al segmentar aparece la necesidad de usar librerías con la misma base de codigo y sin carga repetida. Y al mismo tiempo permitir versiones diferentes concurrentes de las mismas.
Este punto fue el que presentó mayor dificultad. Se analizaron las siguientes posibilidades:

* SystemJS con ImportMaps
Esta posibilidad fue descartada para librerías que dependen de angular ya que la compilación de compatibilidad con Ivy hace imposible su uso dinamicamente (Angular genera archivos que no existen en los paquetes originales de NPM).

* Module Federation
Parece ser una opcion vaible, pero aun esta en beta y no esta soportada oficialmente por el CLI Angular.
Requiere la versión 5.0 de WebPack y Angular CLI 11


<!-- Las librerías compartidas pueden ser expuestas como módulos de NPM. -->


#### Versionado en Repositorios
<!--Monorepo vs Multiples Repos -->

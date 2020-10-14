import { registerApplication, start } from "single-spa";
import 'zone.js/dist/zone';
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";

// const routes = constructRoutes(
//   document.querySelector("#single-spa-layout") as HTMLTemplateElement
// );
// const applications = constructApplications({
//   routes,
//   loadApp({ name }) {
//     return System.import(name);
//   },
// });
// const layoutEngine = constructLayoutEngine({ routes, applications });

// applications.forEach(registerApplication);
// layoutEngine.activate();
// start();


registerApplication({
  name: 'home',
  app: () => System.import('@single-spa/welcome'),
  activeWhen: '/home'
});

registerApplication({
  name: 'myApp',
  app: () => System.import('myApp'),
  activeWhen: '/my-app'
});

registerApplication({
  name: 'naza',
  app: () => System.import('naza'),
  activeWhen: '/naza'
});


registerApplication({
  name: 'web-component',
  app: () => System.import('web-component'),
  activeWhen: '/web-component'
});
// <application name="@single-spa/welcome"></application>

start();
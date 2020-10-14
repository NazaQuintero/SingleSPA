// import singleSpaHtml from 'single-spa-html';


// const htmlLifecycles = singleSpaHtml({
//     template: '<naza-native-element></naza-native-element>',
// })

// export const bootstrap = htmlLifecycles.bootstrap;
// export const mount = htmlLifecycles.mount;
// export const unmount = htmlLifecycles.unmount;

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["exports", "single-spa-html"], function (exports, single_spa_html_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.unmount = exports.mount = exports.bootstrap = void 0;
    single_spa_html_1 = __importDefault(single_spa_html_1);
     const htmlLifecycles = single_spa_html_1.default({
         template: '<naza-native-element>naza-native-element works!</naza-native-element>',
     });

     class NazaElement extends HTMLParagraphElement {
        constructor() {
            super();
        }
    }
    customElements.define('naza-native-element', NazaElement, { extends: 'p'});
     
    exports.bootstrap = htmlLifecycles.bootstrap;
    exports.mount = htmlLifecycles.mount;
    exports.unmount = htmlLifecycles.unmount;
});
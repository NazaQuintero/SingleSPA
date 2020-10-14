class NazaElement extends HTMLParagraphElement {
    constructor() {
        super();
    }
}
customElements.define('naza-native-element', NazaElement, { extends: 'p'});
import { LitElement, html, css } from 'https://cdn.pika.dev/lit-element';

class XFoo extends LitElement {
  render(){
    return html`
      <h1>hello ${new Date()}</h1>
    `;
  }
}
customElements.define('x-foo', XFoo);
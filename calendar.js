import { LitElement, html, css } from 'https://cdn.pika.dev/lit-element';
import './calendar-header.js';
class XCalendar extends LitElement{
    render() {
        return html`
            <x-calendar-header></x-calendar-header>
        `;
    }

}
customElements.define('x-calendar', XCalendar); 

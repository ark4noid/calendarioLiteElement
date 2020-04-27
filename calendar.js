import { LitElement, html, css} from 'https://cdn.pika.dev/lit-element';
import { dateService } from './date-service.js';
import './calendar-header.js';
import './calendar-body.js';
class XCalendar extends LitElement {
    static get styles() {
        return css`
            :host {
                display: block;
                background-color: var(--x-color-primary);
                color: var(--x-color-text-primary);
            }
        `;
    }
    connectedCallback(){
        super.connectedCallback();
        dateService.start();
    }
    disconnectedCallback(){
        super.disconnectedCallback();
        dateService.stop();
    }
    render() {
        return html`
            <x-calendar-header></x-calendar-header>
            <x-calendar-body></x-calendar-body>
        `;
    }
}
customElements.define('x-calendar', XCalendar); 
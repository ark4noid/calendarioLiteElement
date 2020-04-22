import { LitElement, html } from 'https://cdn.pika.dev/lit-element';
import { dateService } from './date-service.js';
import { DateFormatter } from './date-formatter.js';
// se importan otros ficheros


// se crea la clase XCalendarClock con BaseELement
class XCalendarClock extends LitElement {
    static get properties() {
        return {
            date: { type: Object }
        };
    }
    constructor() {
        super();
        this.date = dateService.date;
    }
    //cada segundo hace un callback para actualizar los segundos
    connectedCallback() {
        super.connectedCallback();
        dateService.on(dateService.SECOND_CHANGED, this._onSecondChanged);
    }
    // disconnected salta cuando se elimina el componente
    disconnectedCallback() {
        super.disconnectedCallback();
        dateService.off(dateService.SECOND_CHANGED, this._onSecondChanged);
    }
    //pasa textcontent a timestring
    _onSecondChanged = (newDate) => {
        this.date = newDate;
    }
    //devuelve timestring con id text
    render() {
        return html`
            <p class="x-clock">${DateFormatter.timeString(this.date)}</p>
        `;
    }
}
//las etiquetas de los nombres de x calendar
customElements.define('x-calendar-clock', XCalendarClock);
import { LitElement, html, css } from 'https://cdn.pika.dev/lit-element';
import { dateService} from './date-service.js';
import { DateFormatter } from './date-formatter.js';

// creamos clase tipo XCALENDAR que extiende delite element 
//Creamos un metodo "properties" estatico devuelve una fecha "date" de tipo objeto
class XCalendarDate extends LitElement {
    static get properties() {
        return {
            date: { type: Object }
        };
    }
    //llamamos a super y en this.date guardamos la actualizacion
    constructor() {
        super();
        this.date = dateService.date;
    }
    //cada segundo hace un callback para actualizar los dias con el dateservice
    connectedCallback() {
        super.connectedCallback();
        dateService.on(dateService.DAY_CHANGED, this._onDayChanged);
    }
    // disconnected salta cuando se elimina el componente
    disconnectedCallback() {
        super.disconnectedCallback();
        dateService.off(dateService.DAY_CHANGED, this._onDayChanged);
    }
    //pasa textcontent a timestring
    //_onDayChanged (cuando ya se ha cambiado,la guarda en new this.date)
    _onDayChanged = (newDate) => {
        this.date = newDate;
    }
    //devuelve timestring con id text
    //un html con un <p> formateando el string de date en this.date
    render() {
        return html`
            <p class="x-calendar-date">${DateFormatter.dateString(this.date)}</p>
        `;
    }
}
//las etiquetas de los nombres de x calendar
customElements.define('x-calendar-date', XCalendarDate);
 
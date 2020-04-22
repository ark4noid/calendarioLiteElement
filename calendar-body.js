import { LitElement, html, css } from 'https://cdn.pika.dev/lit-element';
import './calendar-navigation.js';
import { dateService } from './date-service.js';
import './calendar-month.js';
//TODO: importar el selected month
//TODO: importar el month

class XCalendarBody extends LitElement {
    static get properties() {
        return {
            selectedDate: {type: Object}
        }
    }
    constructor(){
        super();
        this.selectedDate = dateService.date;
    }
    connectedCallback() {
        super.connectedCallback();
        dateService.on(dateService.DAY_CHANGED, this._onDayChanged);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        dateService.off(dateService.DAY_CHANGED, this._onDayChanged);
    }
    _onDayChanged = (newDate) => {
        this.selectedDate = newDate;
    }
    _onNext(){
        const newDate = new Date(this.selectedDate);
        newDate.setMonth(this.selectedDate.getMonth() + 1);
        this.selectedDate = newDate;
    }
    _onPrevious(){
        const newDate = new Date(this.selectedDate);
        newDate.setMonth(this.selectedDate.getMonth() - 1);
        this.selectedDate = newDate;
    }

    // TODO: cuando el x-calendar-navigation lance el evento previous tenemos que restar uno a los meses
    // de la fecha actual

    // TODO: cuando el x-calendar-navigation lance el evento next tenemos que sumar uno a los meses
    // de la fecha actual
    render() {
        return html`
            <x-calendar-selected-month .date=${this.selectedDate}></x-calendar-selected-month>
            <x-calendar-navigation @next=${this._onNext} @previous=${this._onPrevious}></x-calendar-navigation>
            <x-calendar-month .date=${this.selectedDate}></x-calendar-month>
        `;
    }
}
customElements.define('x-calendar-body', XCalendarBody); 

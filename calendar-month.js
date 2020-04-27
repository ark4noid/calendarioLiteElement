// 1. Importar lit element
// 2. Definir el custom element x-calendar-month
// 3. Darle una propiedad date
// 4. Definir la funcion render
// 4.1 Definir una funcion renderWeekDays que pinte L X ...
// getWeekDays
// 4.2 Definir una funcion renderDays que pinte los dias que han de aparecer en el mes acutal
// MonthHelper.getDays(this.date, config.startDay, 7 * config.monthRows);
// 4.3 Funcion que pinte cada uno de los dias
// 4.4 Funcion que dado un dia calcula que clases lleva
// 5. Gestionar los clicks para cambiar los estilos del dia seleccionado


// 1
import { LitElement, html, css } from 'https://cdn.pika.dev/lit-element';
import {config} from './config.js';
import {WEEKDAY_LETTERS} from './date-constants.js';
import {MonthHelper} from './month-helper.js';
import {dateService} from './date-service.js'
import './calendar-weekday.js';
import './calendar-day.js';
// 2
class XCalendarMonth extends LitElement {
    // 3
    static get styles(){
        return css`
            :host {
                display:grid;
                grid-template-columns: repeat(7, 1fr);
                grid-template-rows: repeat(7, 1fr);
                gap: var(--x-margin-small);
                justify-items: stretch;
                font-size: var(--x-font-tiny);
            }
            .x-month__item--today{
                color: (--x-color-primary--light);)
            }
            .x-month__item--outside{
                color: var(--x-color-primary--dark);
            }
            .x-month__item--selected{
                color: var(--x-color-secondary--light);
            }
        `
    }
    static get properties() {
        return {
            date: { type: Object }
        };
    }
    _getWeekDays() {
        const days = [];
        for (let delante = config.startDay; delante < WEEKDAY_LETTERS.length; delante++) {
            days.push(WEEKDAY_LETTERS[delante]);
        }
        for (let detras = 0; detras < config.startDay; detras++) {
            days.push(WEEKDAY_LETTERS[detras])
        }
        return days;
    }
    _calculateClasses(day){
        let classes = 'x-month__item';
        /**
         * Si day es el dia de hoy (dateService.isToday(day))
         * añadir clase 
         */
        if(dateService.isToday(day)){
            classes += ' x-month__item--today x-month__item--selected';
        }
         /*
         * Si el mes de day es distinto del mes de this.date
         * añadir la clase x-month__item--outside
         */
        if(this.date.getMonth() !== day.getMonth()){
            classes += ' x-month__item--outside';
        }
        return classes;
    }
    // 4.1 
    _renderWeekdays(){
        const days = this._getWeekDays(); // ['L', 'M', 'X', ...]
        return days.map((day) => {
            return html`<x-calendar-weekday .weekday=${day}></x-calendar-weekday>`
        });
    }
    _onDayClick(ev){
        const selectedDay = this.renderRoot.querySelector('.x-month__item--selected');
        selectedDay && selectedDay.classList.remove('x-month__item--selected');
        const newDay = ev.target;
        newDay.classList.add('x-month__item--selected');
    }
    // 4.2
    _renderDays(){
        const days = MonthHelper.getDays(this.date, config.startDay, 7 * config.monthRows);
        return days.map((day) => {
            const classes = this._calculateClasses(day);
            return html `
                <x-calendar-day class="${classes}" @click=${this._onDayClick} .date=${day}></x-calendar-day> 
            `;
        });
    }
    // 4
    render() {
        return html`
            ${this._renderWeekdays()}
            ${this._renderDays()}
        `;
    }
}
// 2
customElements.define('x-calendar-month', XCalendarMonth);







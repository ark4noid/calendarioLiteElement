import { LitElement, html, css } from 'https://cdn.pika.dev/lit-element';
import {DateFormatter} from './date-formatter.js';
class SelectedMonth extends LitElement{
   static get properties(){
       return {
           date: {type: Object}
       };
   }
   render() {
       return html`
        <p>${DateFormatter.monthString(this.date)}</p>
       `;
   } 
}
customElements.define('x-calendar-selected-month', SelectedMonth); 
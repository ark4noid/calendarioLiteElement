import { LitElement, html } from 'https://cdn.pika.dev/lit-element';

class XCalendarWeekday extends LitElement{
    static get properties(){
        return {
            weekday: {type: String}
        };
    }
    render(){
        return html`
            <div>${this.weekday}</div>
        `
    }
}
customElements.define('x-calendar-weekday', XCalendarWeekday);
import { LitElement, html, css } from 'https://cdn.pika.dev/lit-element';
class XCalendarNavigation extends LitElement{
//esta importado navigation y html y css
//metodos:
//nuevo custom element (previous) bubbles (van hacia arriba hijo-padre)esta a TRUE   
_onPrevious(){
      const event = new CustomEvent("previous",{
          bubbles: true,
          composed: true,
          
      });
    //Lanza el evento al pulsar
      this.dispatchEvent(event);
    }
    //nuevo custom element (next) bubbles (van hacia arriba hijo-padre)esta a TRUE 
    _onNext(){
        const event = new CustomEvent("next",{
            bubbles: true,
            composed: true,
            
        });
    //Lanza el evento al pulsar
        this.dispatchEvent(event);
    }
   //devuelve un <div> html, con los botones previous y  next
    render(){
        return html`
        <div>
            <button @click=${this._onPrevious}>-</button>
            <button @click=${this._onNext}>+</button>

        </div>
        `
    }
    
}
customElements.define('x-calendar-navigation', XCalendarNavigation);
import { css, LitElement } from 'https://cdn.pika.dev/lit-element';

export const layout = css`
    .horizontal {
        display:flex;
    }
`;
class Foo extends LitElement {
    static get styles(){
        return [
            layout,
            css`
                .mis_estilos {

                }
            `
        ]
    }
}
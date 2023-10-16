import { LitElement, html, css } from 'lit';

class PolarisChip2 extends LitElement {
  static properties = {
    header: { type: String },
  }

  static get styles(){
   return css`
    :host {
    display: block; 
    }
  `;
 
  } 

  constructor() {
    super();
    this.header = 'My boilerplate';
  }

  render() {
    return html`
     <span>${this.header}</span>`;
  }
}

customElements.define('polaris-chip2', PolarisChip2);
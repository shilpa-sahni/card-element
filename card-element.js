import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `card-element`
 * Simple card element
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
 class CardElement extends PolymerElement {
  static get template() {
    return html`
    <style>
    :host {
      display: block;
    }
    </style>
    <div>
      <h3><slot name="title"></slot></h3>
      <p><slot name="content"></slot></p>
      <div><slot name="action-buttons"></slot></div>
    </div>
    `;
  }
  static get properties() {
    return {
      heading: {
        type: String,
        value: '',
      },
      text: {
        type: String,
        value: '',
      },
    };
  }
}

window.customElements.define('card-element', CardElement);

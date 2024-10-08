import { LitElement, html } from 'lit';
import styles from './ilw-profile.styles';
import './ilw-profile.css';

class Profile extends LitElement {

    static get properties() {
        return {
            theme: { type: String, attribute: true }
        };
    }

    static get styles() {
        return styles;
    }

    constructor() {
        super();
        this.theme = '';
    }

    render() {
        return html`
      <div>
          <slot></slot>
      </div>
    `;
    }
}

customElements.define('ilw-profile', Profile);
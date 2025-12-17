import { LitElement, html } from 'lit';
// @ts-ignore
import styles from './ilw-profile.styles';
import './ilw-profile.css';

 import { customElement, property, query, state } from "lit/decorators.js";
@customElement('ilw-profile')
export default class Profile extends LitElement {

    @property({type: String}) 
    theme: "white" | "gray" | "orange" | "blue" | "orange-gradient" | "blue-gradient" = "white";

    @property({type: Boolean}) 
    right: boolean = false;

    @property({type: Boolean}) 
    circle: boolean = false;
    @property({type: String}) 
    width: string = "";
    @property({type: String}) 
    padding: string = "";
    @property({type: Boolean}) 
    right_private: boolean = false;

    static get styles() {
        return styles;
    }

    constructor() {
        super();
        this.circle = false;
        this.right = false;
        this.width = '';
        this.padding = '';
        this.right_private = false;
    }

    get paddingStyle() {
        return this.padding == '' ? '' : 'padding: ' + this.padding + ';';
    }

    get outerWidth() {
        return this.width == 'full' || this.width == 'auto' ? 'fixed' : this.width == 'page' ? 'page' : '';
    }

    get innerWidth() {
        return this.width == 'auto' || this.width == 'page' ? 'fixed' : '';
    }

    handleSlotchange(e: Event) {
        this.right_private = (e.target as HTMLSlotElement).assignedElements({ flatten: true }).length == 0;
    }

    render() {
        return html`
        <div class="profile-outer ${this.theme} ${this.outerWidth}">
            <div style="${this.paddingStyle}" class="profile ${this.right || this.right_private ? 'spaced' : ''} ${this.innerWidth}">
                <div class="left-image">
                    <div class="image ${this.circle ? 'round' : ""}"><slot name="image"></slot></div>
                </div>
                <div class="right-name">
                    <div class="name"><slot name="name"></slot></div>
                    <div class="title"><slot name="title"></slot></div>
                </div>
                <div class="left-contact">
                    <p class="contact-title">Contact</p>
                    <div class="contact"><slot name="contact"></slot></div>
                    <div class="left"><slot name="left"></slot></div>
                </div>
                <div class="right-main">
                    <div class="main"><slot @slotchange=${this.handleSlotchange}></slot></div>
                    <div class="bottom"><slot name="bottom"></slot></div>
                </div>
            </div>
        </div>`;
    }
}

declare global {
interface HTMLElementTagNameMap {
    "ilw-profile": Profile;
  }
}
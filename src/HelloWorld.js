import { html, css, LitElement } from 'lit';

export class HelloWorld extends LitElement {

  // static properties = { 
  //   greeting: {},
  //   planet: {},
  // };

  // the website is empty with commented parts are uncommented. why?
  
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--hello-world-text-color, #000);
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String }, //why is title not being returned
      counter: { type: Number },
    };
  }

  constructor() {
    super();
    this.title = 'Hey Nikita'; //why do i see Hello World instead of Hey Nikita?
    this.counter = 5;
    // this.greeting = 'Hello';
    // this.planet = 'World';
  }

  __increment() {
    this.counter += 2; //changed counter to 2 from 1
  }

  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2> 
      <button @click=${this.__increment}>increment</button>
      <!-- <span @click=${this.togglePlanet}
        >${this.greeting}
        <span class="planet">${this.planet}</span>
      </span> -->
    `;
  }

  // togglePlanet() {
  //   this.planet = this.planet === 'World' ? 'Mars' : 'World';
  // }
}
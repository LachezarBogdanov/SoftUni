import {html, render, page} from '../lib.js'

const temp = () => html`
 <!-- Home page -->
 <section id="hero">
    <h1>
      Accelerate Your Passion Unleash the Thrill of Sport Cars Together!
    </h1>
  </section>
`

export async function  homeView() {
    render(temp());
}
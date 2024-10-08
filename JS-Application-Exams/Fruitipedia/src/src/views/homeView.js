import { html, render } from "../lib.js";
import { updateNav } from "../util.js";


const temp = () => html`
     <!-- Home page -->
 <section id="home">
    <h1>Learn more about your favorite fruits</h1>
    <img
      src="./images/pexels-pixabay-161559-dImkWBDHz-transformed (1).png"
      alt="home"
    />

  </section>
`

export async function homeView() {
    updateNav();
    render(temp());
}
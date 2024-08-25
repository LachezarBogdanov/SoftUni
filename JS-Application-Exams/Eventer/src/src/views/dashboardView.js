import { html, render } from "../lib.js";
import { getAllEvents } from "../util.js";
import { eventTemp } from "./partials/eventTemp.js";


const temp = (allEvents) => html`
    <!-- Dashboard page -->
  <h2>Current Events</h2>
  <section id="dashboard">
    <!-- Display a div with information about every post (if any)-->
    ${allEvents.length ? allEvents.map(event => eventTemp(event)) : html`<h4>No Events yet.</h4>`}
  </section>
  
`

export async function dashboardView(){
    let allEvents = await getAllEvents();
    
    render(temp(allEvents));
}
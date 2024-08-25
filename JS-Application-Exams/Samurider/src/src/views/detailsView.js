import { html, render, page } from "../lib.js";
import { getMotorcycleById, getUserData } from "../util.js";


const temp = (motorDetails, isOwner, hasUser) => html`
     <!-- Details page -->
  
  <section id="details">
    <div id="details-wrapper">
      <img id="details-img" src=${motorDetails.imageUrl} alt="example1" />
      <p id="details-title">${motorDetails.model}</p>
      <div id="info-wrapper">
        <div id="details-description">
          <p class="year">Year: ${motorDetails.year}</p>
          <p class="mileage">Mileage: ${motorDetails.mileage} km.</p>
          <p class="contact">Contact Number: ${motorDetails.contact}</p>
             <p id = "motorcycle-description">
              ${motorDetails.about}
                  </p>
        </div>
         <!--Edit and Delete are only for creator-->
         ${isOwner ? html`
            <div id="action-buttons">
      <a href="/edit/${motorDetails._id}" id="edit-btn">Edit</a>
      <a href="/delete/${motorDetails._id}" id="delete-btn">Delete</a>
    </div>
         `: ''}
      </div>
  </div>
</section>
`

export async function detailsView(ctx) {
    let id = ctx.params.id;

    let motorDetails = await getMotorcycleById(id);

    let ownerId = motorDetails._ownerId;
    let userData = await getUserData();
    let isOwner = ownerId == userData?._id;
    
    render(temp(motorDetails, isOwner, !!userData));
}
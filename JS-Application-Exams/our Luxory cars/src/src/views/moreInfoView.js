import { html, render, page } from "../lib.js";
import { getCarById, getUserData } from "../util.js";


const temp = (carInfo, isOwner) => html`
     <!-- Details page -->

  <section id="details">
    <div id="details-wrapper">
      <img id="details-img" src=${carInfo.imageUrl} alt="example1" />
      <p id="details-title">${carInfo.model}</p>
      <div id="info-wrapper">
        <div id="details-description">
          <p class="price">Price: €${carInfo.price}</p>
          <p class="weight">Weight: ${carInfo.weight} kg</p>
          <p class="top-speed">Top Speed: ${carInfo.speed} kph</p>
          <p id="car-description">
           ${carInfo.about}</p>
        </div>

        ${isOwner ? html`
          <!--Edit and Delete are only for creator-->
        <div id="action-buttons">
          <a href="/edit/${carInfo._id}" id="edit-btn">Edit</a>
          <a href="/delete/${carInfo._id}" id="delete-btn">Delete</a>
        </div>
        ` : ''}
        
      </div>
    </div>
  </section>
`

export async function onMoreInfo(ctx) {
    let id = ctx.params.id;

    let carInfo = await getCarById(id);
    let userData = await getUserData();

    let userId = userData?._id;
    let isOwner = userId == carInfo._ownerId;
    
    render(temp(carInfo, isOwner));
}
import { getCharacterById } from "../data/characters.js";
import { html, render } from "../lib.js";
import { getUserData } from "../util.js";


const detailsTemp = (data, isOwner) => html`
  <!-- Details page -->
  <section id="details">
    <div id="details-wrapper">
      <img id="details-img" src=${data.imageUrl} alt="example1" />
      <div>
      <p id="details-category">${data.category}</p>
      <div id="info-wrapper">
        <div id="details-description">
          <p id="description">
           ${data.description}
            </p>
             <p id ="more-info">
              ${data.moreInfo}
                  </p>
        </div>
      </div>
        <h3>Is This Useful:<span id="likes">0</span></h3>

        <div id="action-buttons">
         <!--Edit and Delete are only for creator-->
         ${isOwner ? html`
              <a href="/edit/${data._id}" id="edit-btn">Edit</a>
              <a href="/delete/${data._id}" id="delete-btn">Delete</a>
         ` : html`
         <!--Bonus - Only for logged-in users ( not authors )-->
                <a href="" id="like-btn">Like</a>
         `}


    </div>
      </div>
  </div>
</section>
    ` 
  


export async function onDetailsView(ctx) {
    let id = ctx.params.id;
    
    let characterData = await getCharacterById(id);
    let characterOwnerId = characterData._ownerId;
    let userData = getUserData();

    let isOwner = userData?._id == characterOwnerId;
    
    render(detailsTemp(characterData, isOwner));
}
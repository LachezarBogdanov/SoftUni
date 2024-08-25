import { html } from "../../lib.js";


export const albumTemp = (album) => html`
    <li class="card">
        <img src=${album.imageUrl} alt="travis" />
        <p>
          <strong>Singer/Band: </strong><span class="singer">${album.singer}</span>
        </p>
        <p>
          <strong>Album name: </strong><span class="album">${album.album}</span>
        </p>
        <p><strong>Sales:</strong><span class="sales">${album.sales}</span></p>
        <a class="details-btn" href="/data/albums/${album._id}">Details</a>
      </li>
`
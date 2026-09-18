import {getData} from "./utils/data.js"
import { renderOffers } from "./utils/render.js"
import { getFavorites } from "./utils/storage.js"


const gridContainer = document.querySelector(".grid");


const allOffers = await getData() ;
const favoriteIds = getFavorites();


const favoriteOffers = allOffers.filter(offer => favoriteIds.includes(offer.id));

if (favoriteOffers.length === 0) {
    gridContainer.innerHTML = "<p>no favorite offers saved yet. </p>";

} else {
    renderOffers(gridContainer, favoriteOffers);
}



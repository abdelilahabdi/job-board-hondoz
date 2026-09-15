import { getData } from "./data.js";
import { renderOffers } from "./render.js";

const CardContainer = document.querySelector(".grid")

const offers = await getData()

renderOffers(CardContainer, offers)
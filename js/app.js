import { getData } from "./data.js";
import { renderOffers } from "./render.js";
import { paginate } from "./paginate.js";

const paginationBtn = document.querySelector(".pagination-btn")
const CardContainer = document.querySelector(".grid")

let pageNumber = 1
let cardsrendered = 6

const offers = await getData()

const paginatedOffers = paginate(offers, cardsrendered, pageNumber)
renderOffers(CardContainer, paginatedOffers)
paginationBtn.textContent = `Load more offers (${offers.length - (pageNumber * cardsrendered)} remaining)`


paginationBtn.addEventListener("click", () => {
    const newPaginatedOffers = paginate(offers, cardsrendered, ++pageNumber)
    console.log(pageNumber)
    renderOffers(CardContainer, newPaginatedOffers)
    if(offers.length - (pageNumber * cardsrendered) === 0) {
        paginationBtn.disabled = true
        paginationBtn.textContent = "No more offers to load"
    } else {
        paginationBtn.textContent = `Load more offers (${offers.length - (pageNumber * cardsrendered)} remaining)`
    }
})


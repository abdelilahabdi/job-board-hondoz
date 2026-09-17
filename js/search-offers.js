import { getData } from './utils/data.js'
import { renderSearchInfo, renderOffers } from './utils/render.js'

const citiesContainer = document.querySelector('.filter-group select')
const technologiesContainer = document.querySelector('.tech-cloud')
const offersContainer = document.querySelector('.results-list')

const offers = await getData()

renderSearchInfo(citiesContainer, technologiesContainer, offers)

const searchInput = document.querySelector('.search-input')
const citiesSelect = document.querySelector('.cities-select')
const contractTypes = document.querySelectorAll('.contrat')
const technologyTags = document.querySelectorAll('.tech-pill')
const offerNumberTag = document.querySelector('.highlight-text')
const clearBtn = document.querySelector(".btn-clear")
const contratInputDeafult = document.querySelector(".contrat-deafult")

renderOffers(offersContainer, offers)


const filterOption = {
    search : "" ,
    city : "all",
    contractType : "all" ,
    technologiesChoosen : [],
    sort : "asc"
}

function filterOffers(offers) {
    let newOffers = offers
    const {search, city, contractType, technologiesChoosen} = filterOption;
    if(search !== ""){
        newOffers = newOffers.filter(offer => offer.title.toLowerCase().includes(search))
    }
    if(city !== "all"){
        newOffers = newOffers.filter(offer => offer.city === city)
    }
    if(contractType !== "all"){
        newOffers = newOffers.filter(offer => offer.contractType === contractType)
    }
    if(technologiesChoosen.length > 0){
        newOffers = newOffers.filter(offer => {
            let flag = false
            offer.technologies.forEach(offerTechnologies => {
                technologiesChoosen.forEach(searchTechnologies => {
                    if(offerTechnologies === searchTechnologies){
                        flag = true
                    }
                })
            })
            if(flag){
                return true
            }
            return false
        })
    }
    console.log(newOffers)
    return newOffers
    
}

searchInput.addEventListener('input' , () => {
    filterOption.search = searchInput.value.toLowerCase()
    renderOffers(offersContainer, filterOffers(offers))
})

citiesSelect.addEventListener("change" ,() => {
    filterOption.city = citiesSelect.value
    renderOffers(offersContainer, filterOffers(offers))
})


contractTypes.forEach(contractType => {
    contractType.addEventListener("change" ,() => {
        filterOption.contractType = document.querySelector(".contrat:checked").value
        renderOffers(offersContainer, filterOffers(offers))
    })
})


technologyTags.forEach(tech => {
    tech.addEventListener('click' , () => {
        if(!tech.classList.contains('active')){
            tech.classList.add('active')
            filterOption.technologiesChoosen.push(tech.textContent)
            renderOffers(offersContainer, filterOffers(offers))
            return
        }
        tech.classList.remove('active')
        filterOption.technologiesChoosen = filterOption.technologiesChoosen.filter(technology => technology !==  tech.textContent)
        renderOffers(offersContainer, filterOffers(offers))
    })
})

// clearBtn.addEventListener("click", () => {
//     let {search, city, contractType, technologiesChoosen} = filterOption;
//     search = ""
//     city = "all"
//     contractType = "all"
//     technologiesChoosen = []
//     console.log(filterOption)
//     searchInput.value = ''
//     citiesSelect.value = 'all'
//     contratInputDeafult.ariaChecked = true
//     technologyTags.forEach(tech => {
//         if(tech.classList.contains('active')){
//             tech.classList.remove('active')
//         }
//     })
//     renderOffers(offersContainer,offers)
// })
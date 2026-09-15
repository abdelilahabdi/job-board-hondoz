import { getData } from './utils/data.js'
import { renderSearchInfo } from './utils/render.js'

const citiesContainer = document.querySelector('.filter-group select')
const technologiesContainer = document.querySelector('.tech-cloud')

const offers = await getData()

renderSearchInfo(citiesContainer, technologiesContainer, offers)
function CardCreator(offer) {

    const cardContainer = document.createElement('article')
    cardContainer.classList.add('card')

    // Card Header
    const cardHeader = document.createElement('div')
    cardHeader.classList.add('card-header')

    // Company
    const companyContainer = document.createElement('div')
    companyContainer.classList.add('company')

    // Company Logo
    const companyLogo = document.createElement('div')
    companyLogo.classList.add('company-logo')
    companyLogo.style.color = '#EF4444'
    companyLogo.style.backgroundColor = '#FEF2F2'
    companyLogo.textContent = offer.company[0]

    companyContainer.appendChild(companyLogo)

    // Company Name

    const companyName = document.createElement('h3')
    companyName.textContent = offer.company

    companyContainer.appendChild(companyName)

    // Heart
    const heartIcon = document.createElement('i')
    heartIcon.classList.add('fa-regular', 'fa-heart', 'heart-icon')

    cardHeader.append(companyContainer, heartIcon)

    // Title
    const cardTitle = document.createElement('h3')
    cardTitle.classList.add('card-title')
    cardTitle.textContent = offer.title

    // Card Meta
    const cardMeta = document.createElement('div')
    cardMeta.classList.add('card-meta')

    // Contract Badge
    const contractBadge = document.createElement('span')
    contractBadge.classList.add('badge', 'badge-stage')
    contractBadge.textContent = offer.contractType

    // Location
    const location = document.createElement('span')
    location.classList.add('meta-item')
    location.innerHTML = `
        <i class="fa-solid fa-location-dot"></i> ${offer.city}
    `

    // Date
    const date = document.createElement('span')
    date.classList.add('meta-item')
    date.innerHTML = `
        <i class="fa-regular fa-calendar"></i> ${offer.publicationDate}
    `

    // Duration
    const duration = document.createElement('span')
    duration.classList.add('meta-item')
    duration.style.backgroundColor = '#F1F5F9'
    duration.style.padding = '2px 8px'
    duration.style.borderRadius = '12px'
    duration.textContent = '6 months'

    cardMeta.append(
        contractBadge,
        location,
        date,
        duration
    )

    // Description
    const cardDescription = document.createElement('p')
    cardDescription.classList.add('card-desc')
    cardDescription.textContent = offer.shortDescription

    // Tags
    const tagsContainer = document.createElement('div')
    tagsContainer.classList.add('tags')

    offer.technologies.forEach(technology => {

        const tag = document.createElement('span')
        tag.classList.add('tag')
        tag.textContent = technology

        tagsContainer.appendChild(tag)
    })

    // Card Footer
    const cardFooter = document.createElement('div')
    cardFooter.classList.add('card-footer')

    const offerLink = document.createElement('a')
    offerLink.classList.add('btn-link')
    offerLink.href = '#'
    offerLink.innerHTML = `
        View offer <i class="fa-solid fa-arrow-right"></i>
    `

    cardFooter.appendChild(offerLink)

    // Assemble Card
    cardContainer.append(
        cardHeader,
        cardTitle,
        cardMeta,
        cardDescription,
        tagsContainer,
        cardFooter
    )

    return cardContainer
}



export function renderOffers(parent, offers) {

    offers.forEach(offer => {
        const card = CardCreator(offer)
        parent.appendChild(card)
    });
}
export function getFavorites() {
  const data = localStorage.getItem('favorites');

  if (data) {
    return JSON.parse(data) ;

  } else {
    return [] ;
  }
}


export function toggleFavorite(offerId){
    let favorites = getFavorites();
    if (favorites.includes(offerId)) {
       favorites = favorites.filter(id => id !== offerId);

    }else {
        favorites.push(offerId) ;
    }
}
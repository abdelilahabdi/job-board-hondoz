export function getFavorites() {
  const data = localStorage.getItem('favorites');
  return data ? JSON.parse(data) : [] ;


}




export function toggleFavorite(offerId){
    let favorites = getFavorites().map(item => String(item));

    const id = String(offerId);

    
    
    if (favorites.includes(id)) {
       favorites = favorites.filter(item => item !== id);

    }else {
        favorites.push(id) ;
    }

    const uniqueFavorites = [...new Set(favorites)];

    localStorage.setItem('favorites', JSON.stringify(uniqueFavorites)); //save changer f browser
}
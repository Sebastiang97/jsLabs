export const isFavorite = ({ heroesFav = [], id = 0 }) => {
  let uid
  heroesFav.map((heroeFav) => {
    if (heroeFav.heroe.id == id) {
      uid = heroeFav.uidDoc
    }
  })
  return uid
}

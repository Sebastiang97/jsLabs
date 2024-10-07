import Storage from './storage.js'
const storage = new Storage()

class RenderCards {
  renderCards(gifs) {
    let res = ''
    if (gifs.length <= 0) return this.render404()

    gifs.map(({ id, title, url }) => {
      const emoji = this.validateEmoji(id)
      res += `
        <div class="card animate__animated animate__fadeIn targets" id="${id}" >
          <img src="${url}" id="${id}" alt="">
          <div class="cont hide" id="${id}">
            <h4 id="${id}">
              ${title} 
              <br /><br />
              ver mas
            </h4>
          </div>
          <div class="btn-fav" id="${id}">
            <span class="fav" data-img=${url} data-title=${title} data-id=${id}>${emoji}</span>
          </div>
        </div>
      `
    })
    return res
  }

  renderOne({ id, title, url }) {
    const emoji = this.validateEmoji(id)
    let res = ''
    res = `
      <div class="card animate__animated animate__fadeIn targets"  >
        <img src="${url}" alt="">
        <h4>${title}</h4> 
        <div class="btn-fav">
          <span class="fav" data-img=${url} data-title=${title}>${emoji}</span>
        </div>
      </div>
    `
    return res
  }

  renderFav() {
    const fav = storage.getData('favs')
    let res = ''
    if (fav === null) return this.render404('no favorite gifs, add it')
    fav?.map(({ img, title, id, date }) => {
      const emoji = this.validateEmoji(id)
      res += `
        <div class="card animate__animated animate__fadeIn targets" id="${id}" >
          <img src="${img}" id="${id}" alt="">
          <div class="cont" id="${id}">
            <span class="date">${date}</span>
            <h4 id="${id}">${title}</h4>
          </div>
          <div class="btn-fav" id="${id}">
            <span class="fav" data-img=${img} data-title=${title} data-id=${id}>${emoji}</span>
          </div>
        </div>
      `
    })
    return res
  }

  notifications(msg) {
    return `
      <div class="msg">
        ${msg}
      </div>
    `
  }

  render404(msg) {
    if (msg) {
      return `
        <div class="notfound">
          <div class="neon"> ${msg}</div>
        </div>
      `
    }
    return `
        <div class="notfound">
          <div class="neon"> 404 not found</div>
        </div>
      `
  }

  validateEmoji(id) {
    const isFav = storage.validate(id)
    const emoji = isFav ? '❌' : '💗'
    return emoji
  }
}

export default RenderCards

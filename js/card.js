'use strict'

import  { getCursos } from "./api.js"


const createCards = (dados) => {

    const a = document.createElement('a')
    const div = document.createElement('div')
    const img = document.createElement('img')
    img.src = dados.icone

    img.classList.add('icone')
    div.classList.add('cards')
    a.classList.add('link')

    a.textContent = dados.sigla
    a.href = './html/cards.html'
 
    a.appendChild(img)
    div.appendChild(a)

    return div
}

const loadCard = async () => {

    const cardContainer = document.getElementById('all-button')
    const data = await getCursos()

    const cards = data.cursos.map(createCards)

    cardContainer.replaceChildren(...cards)
}
loadCard()
// Cria a movimentação das páginas com o clique do usuário
document.getElementById('all-button').addEventListener('click',(event) => {
    
    localStorage.setItem('sigla', event.target.textContent)
     
})



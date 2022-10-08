'use strict'

import  { getCursos } from "./api.js"


const criarCard = (variavel)=>{

    
    const a = document.createElement('a')
    const div = document.createElement('div')
    const img = document.createElement('img')
    
    img.src = variavel.icone
    div.classList.add('container-button-JS')
    a.classList.add('a-button')
    img.classList.add('img-button')
    a.textContent = variavel.sigla
    a.href = './front/html/cards.html'
    
    a.classList.add('link')
   
    div.appendChild(img) 
    div.appendChild(a)
    return div
} 

// Essa é a função que vai projetar a função anterior na tela
const pushCard = async () =>{
    // Pega o card criado e traz para esta function
    const card = document.getElementById('all-button')
    // Cria uma váriavel da function anterior
    const dados = await getCursos()
    // Irá mapear a function anterior
    const cardMap = dados.map(criarCard)
    // Muda o conteúdo da function nos filhos da function
    card.replaceChildren(...cardMap)
}
pushCard()

// Cria a movimentação das páginas com o clique do usuário
document.getElementById('all-button').addEventListener('click',(event) => {
    
    console.log (localStorage.setItem('sigla', event.target.textContent))
     
})



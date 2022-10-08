'use strict'

import { getAlunosCurso, getAlunosStatus } from "./api.js"

console.log(localStorage.getItem('sigla'))

const createAlunos = (varv) => {

    const a = document.createElement('a')
    const img = document.createElement('img')
    const span = document.createElement('span')
    a.classList.add('cards-alunos')
    img.src = dados.foto
    span.textContent = dados.nome
    img.classList.add('dados')
    span.classList.add('dados')
    a.id = dados.matricula
    a.href = './desempenho.html'

    if (dados.status == 'Cursando') {
        a.classList.add('cards-azul')
    }
    if (dados.status == 'Finalizado') {
        a.classList.add('cards-amarelo')
    }

    a.appendChild(img)
    a.appendChild(span)
   

    return a
}
const carregarAlunos = async () => {
    
    const alunos_Container = document.getElementById('alunos-container')
    const aluno = document.createElement('div')
    aluno.id = 'aluno-container'
    aluno.classList.add('aluno-container') 
    
    const dados = await getAlunosCurso(item)
   
    const card = dados.curso.map(createAlunos)
    
    aluno.replaceChildren(...card)
    alunos_Container.appendChild(aluno)
    
} 
const item = localStorage.getItem('sigla')
console.log((carregarAlunos(item)))
carregarAlunos(item)
const carregarAlunoStatus = async (event) => {
    
    if(event.target.textContent == 'Status'){
        carregarAlunos(localStorage.getItem('sigla', event))
    }
    else{
        const dados = await getLinkAlunoStatus(event.target.textContent,localStorage.getItem('sigla'))
        const alunoContainer = document.getElementById('aluno-container')
        const card = dados.curso.map(createAlunos)
        alunoContainer.replaceChildren(...card)
    }
}

document.getElementById('status').addEventListener('click', (event)=>{ 

    carregarAlunos(localStorage.getItem('sigla'))

})


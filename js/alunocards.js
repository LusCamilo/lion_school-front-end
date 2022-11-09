'use strict'

import {getAlunosCurso} from "./api.js"


const criarCard = async (dados) => {

    const a = document.createElement('a')
    const img = document.createElement('img')
    const p = document.createElement('p')

    a.href('../html/desempenho.html')
    a.appendChild(img)
    a.appendChild(p)

    img.classList.add('img-aluno')
    img.src(dados.foto)

    p.classList.add('nome-aluno')
    p.textContent(dados.nome)

    div.classList.add('aluno-container')

    if(dados.status == "Cursando"){

        a.classList.add('aluno cursando')

    }else{
        a.classList.add('aluno finalizado')
    }
    return a
}
/* const tituloMain = async (dados) => {
    const h2 = document.querySelector('.titulo')
    h2.textContent = dados.curso

    return h2
} */

const loadCard = async (nomeCurso) => {

    const main = document.querySelector('main')

    const div = document.createElement('div')

    const alunos = await getAlunosCurso(nomeCurso)

    console.log(alunos)

    /* const titulo = tituloMain(alunos[0]) */

    const criaCard = alunos.map(criarCard)

    div.replaceChildren(...criaCard)

    /* main.appendChild(titulo) */
    main.appendChild(div)

}

const curso = getAlunosCurso(localStorage.getItem('sigla'))
console.log(curso)
loadCard(curso)
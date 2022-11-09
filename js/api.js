'use strict'

const getCursos = async () => {

    const url = 'https://senai-api.netlify.app/.netlify/functions/api/cursos'
    const response = await fetch(url)
    const listaCursos = response.json()
    return listaCursos

}
const getAlunosCurso = async (curso) => {


    const url = `https://senai-api.netlify.app/.netlify/functions/api/alunos/${curso}`
    const response = await fetch(url)
    const listaCursosAlunos = response.json()
    return listaCursosAlunos


}
const getAlunosStatus = async (curso, status) => {

    const url = `https://senai-api.netlify.app/.netlify/functions/api/alunos/${status}/${curso}`
    const response = await fetch(url)
    const listaCursosAlunos = response.json()
    return listaCursosAlunos

}

export {

    getAlunosStatus,
    getAlunosCurso,
    getCursos

}
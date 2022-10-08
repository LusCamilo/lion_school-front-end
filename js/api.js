'use strict'

const getCursos = async () => {

    const url = 'http://localhost:8080/cursos'
    const response = await fetch(url)
    const listaCursos = await response.json()
    return listaCursos

}
const getAlunosCurso = async (curso) => {


    const url = `http://localhost:8080/alunos/${curso}`
    const response = await fetch(url)
    const listaCursosAlunos = await response.json()
    return listaCursosAlunos


}
const getAlunosStatus = async (curso, status) => {

    const url = `http://localhost:8080/alunos/curso/${curso}/${status}`
    const response = await fetch(url)
    const listaCursosAlunos = await response.json()
    return listaCursosAlunos

}
const getAlunoMatricula = async (matricula) => {

    const url = `http://localhost:8080/alunos/${matricula}`
    const response = await fetch(url)
    const listaCursosAlunos = await response.json()
    return listaCursosAlunos

}

export {

    getAlunosStatus,
    getAlunoMatricula,
    getAlunosCurso,
    getCursos

}
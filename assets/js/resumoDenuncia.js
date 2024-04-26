/**
 * Realiza o cadastro de uma denúncia
 * @param {Object} denuncia { local: 'Igreja', data: '12/10/2024', hora: '08:00', descricao: 'Isso é um exemplo', tipo_de_denuncia: 'vandalismo', anonimo: false, nome_aluno: '', escola_id: 1 }
 */

function criaId() {
  const id = parseInt(localStorage.getItem('id')) + 1

  localStorage.removeItem('id')

  localStorage.setItem('id', id)

  return id
}

var denuncia

function lerNovaDenuncia() {
  denuncia = JSON.parse(localStorage.getItem('novaDenuncia'))

  let localOcorrido = document.getElementById('localOcorrido')
  let data = document.getElementById('data')
  let hora = document.getElementById('hora')
  let descricao = document.getElementById('descricao')
  let anonimo = document.getElementById('anonimo')

  let dataDenuncia = new Date(denuncia.data)

  localOcorrido.innerText = denuncia.local
  data.innerText = dataDenuncia.toLocaleDateString('pt-BR')
  hora.innerText = denuncia.hora
  descricao.innerText = denuncia.descricao
  anonimo.checked = denuncia.anonimo
}

function denunciar() {
  let denuncias = localStorage.getItem('denuncias')

  denuncia.status = 'Aberto' // na criação sempre adiciona o status de aberto para denúncia
  denuncia.id = criaId()

  if (!denuncias) {
    localStorage.setItem('denuncias', JSON.stringify([]))
  }

  denuncias = JSON.parse(localStorage.getItem('denuncias'))

  denuncias.push(denuncia)

  localStorage.removeItem('denuncias')

  localStorage.setItem('denuncias', JSON.stringify(denuncias))
  localStorage.removeItem('novaDenuncia')

  let conteinerConteudo = document.getElementById('conteinerConteudo')
  let denunciaSucesso = document.getElementById('denunciaSucesso')

  conteinerConteudo.style.display = 'none'
  denunciaSucesso.style.display = 'flex'

  setTimeout(() => {
    window.location.href = './denuncias.html'
  }, 700)
}

window.addEventListener('load', () => {
  lerNovaDenuncia()
})

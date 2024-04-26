/**
 * Realiza o cadastro de uma denúncia
 * @param {Object} denuncia { local: 'Igreja', data: '12/10/2024', hora: '08:00', descricao: 'Isso é um exemplo', tipo_de_denuncia: 'vandalismo', anonimo: false, nome_aluno: '', escola_id: 1 }
 */

var denuncia

function lerNovaDenuncia() {
  denuncia = JSON.parse(localStorage.getItem('novaDenuncia'))
}

function formulario() {
  let local = document.getElementById('local')
  let data = document.getElementById('data')
  let hora = document.getElementById('hora')
  let descricao = document.getElementById('descricao')
  let anonimo = document.getElementById('anonimo')

  var nome_aluno = 'anonimo'

  if (!anonimo.checked) {
    let usuarioLogado = JSON.parse(localStorage.getItem('logado'))
    nome_aluno = usuarioLogado.nome
  }

  let novaDenuncia = {
    local: local.value,
    data: data.value,
    hora: hora.value,
    descricao: descricao.value,
    anonimo: anonimo.checked,
    tipo_de_denuncia: denuncia.tipo_de_denuncia,
    escola_id: denuncia.escola_id,
    nome_aluno,
  }

  localStorage.removeItem('novaDenuncia')
  localStorage.setItem('novaDenuncia', JSON.stringify(novaDenuncia))

  setTimeout(() => {
    window.location.href = './resumo_denuncia.html'
  }, 700)
}

window.addEventListener('load', () => {
  lerNovaDenuncia()
})

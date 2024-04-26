var detalheDenuncia

function voltar() {
  localStorage.removeItem('detalheDenuncia')
  setTimeout(() => {
    window.location.href = './historico.html'
  }, 500)
}

function detalhesDenuncia() {
  detalheDenuncia = JSON.parse(localStorage.getItem('detalheDenuncia'))

  if (detalheDenuncia.status === 'Resolvido') {
    document.getElementById('encerrar').style.display = 'none'
  }
  console.log(detalheDenuncia)

  let nome = document.getElementById('nome')
  let tipo = document.getElementById('tipo')
  let local = document.getElementById('local')
  let data = document.getElementById('data')
  let hora = document.getElementById('hora')
  let descricao = document.getElementById('descricao')

  nome.innerText = detalheDenuncia.nome_aluno
  tipo.innerText = detalheDenuncia.tipo_de_denuncia
  local.innerText = detalheDenuncia.local
  data.innerText = new Date(detalheDenuncia.data).toLocaleDateString('pt-BR')
  hora.innerText = detalheDenuncia.hora
  descricao.innerText = detalheDenuncia.descricao
}

function retornaDenuncias() {
  const denuncias = localStorage.getItem('denuncias')

  return denuncias ? JSON.parse(denuncias) : []
}

function encerrarDenuncia() {
  let denuncias = retornaDenuncias()

  denuncias = denuncias.map((denuncia) => {
    if (denuncia.id === detalheDenuncia.id) {
      denuncia.status = 'Resolvido'
      return denuncia
    }

    return denuncia
  })

  localStorage.removeItem('detalheDenuncia')

  localStorage.removeItem('denuncias')

  localStorage.setItem('denuncias', JSON.stringify(denuncias))

  setTimeout(() => {
    window.location.href = './historico.html'
  }, 700)
}

window.addEventListener('load', () => {
  detalhesDenuncia()
})

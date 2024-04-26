function voltar() {
  localStorage.removeItem('escolaId')
  setTimeout(() => {
    window.location.href = './escolas.html'
  }, 500)
}

function lerEscolaId() {
  let escolaId = JSON.parse(localStorage.getItem('escolaId'))
  let escolas = JSON.parse(localStorage.getItem('escolas'))

  let escola = escolas.find((e) => e.id === escolaId)

  let nome = document.getElementById('nome')
  let status = document.getElementById('status')
  let endereco = document.getElementById('endereco')
  let contato1 = document.getElementById('contato1')
  let contato2 = document.getElementById('contato2')

  nome.innerText = escola.nome
  status.innerText = escola.status
  endereco.innerText = escola.endereco
  contato1.innerText = escola.contato_1
  contato2.innerText = escola.contato_2

  if (escola.status === 'Seguro') {
    status.classList.add('seguro')
  } else {
    status.classList.add('alerta__vermelho')
  }
}

window.addEventListener('load', () => {
  lerEscolaId()
})

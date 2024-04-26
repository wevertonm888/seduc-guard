function retornaEscolas() {
  const escolas = localStorage.getItem('escolas')

  return escolas ? JSON.parse(escolas) : []
}

function adicionaEstadoDeAlerta(gestorId) {
  let escolas = retornaEscolas()

  escolas = escolas.map((escola) => {
    if (escola.id === gestorId) {
      escola.status = 'Alerta vermelho'
      return escola
    }

    return escola
  })

  localStorage.removeItem('escolas')

  localStorage.setItem('escolas', JSON.stringify(escolas))
}

window.addEventListener('load', () => {
  let logado = JSON.parse(localStorage.getItem('logado'))

  adicionaEstadoDeAlerta(logado.escola_id)

  setTimeout(() => {
    window.location.href = './gestor.html'
  }, 3000)
})

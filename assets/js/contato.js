function menu() {
  setTimeout(() => {
    window.location.href = './gestor.html'
  }, 400)
}

window.addEventListener('load', () => {
  let contatos = JSON.parse(localStorage.getItem('contatos'))

  contatos.forEach((c) => {
    let contatos = document.getElementById('contatos')

    let contatoDiv = document.createElement('div')
    contatoDiv.classList.add('contato')
    contatoDiv.classList.add('contato_fundo__branco')

    let spanContato = document.createElement('span')
    spanContato.innerText = c.nome
    spanContato.classList.add('texto')

    let spanNumero = document.createElement('span')
    spanNumero.innerText = c.numero
    spanNumero.classList.add('texto')

    contatoDiv.appendChild(spanContato)
    contatoDiv.appendChild(spanNumero)

    contatos.appendChild(contatoDiv)
  })
})

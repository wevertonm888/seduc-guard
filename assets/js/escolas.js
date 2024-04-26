function lerEscolas() {
  let escolas = JSON.parse(localStorage.getItem('escolas'))

  escolas.forEach((e) => {
    let escolasDiv = document.getElementById('escolas')

    let escolaDiv = document.createElement('div')

    if (e.status === 'Seguro') {
      escolaDiv.classList.add('escola')
      escolaDiv.classList.add('seguro')
    } else {
      escolaDiv.classList.add('escola')
      escolaDiv.classList.add('status__alerta')
    }
    let classes = ['escola', 'seguro']
    escolaDiv.classList.add(...classes)
    escolaDiv.onclick = function () {
      localStorage.setItem('escolaId', JSON.stringify(e.id))
      setTimeout(() => {
        window.location.href = 'escola_detalhe.html'
      }, 500)
    }

    let spanescola = document.createElement('span')
    let spanstatus = document.createElement('span')

    spanescola.innerText = e.nome
    spanescola.classList.add('texto')

    spanstatus.innerText = e.status
    spanstatus.classList.add('texto')
    if (e.status === 'Seguro') {
      spanstatus.classList.add('status__seguro')
    } else {
      spanstatus.classList.add('status__alerta')
    }

    escolaDiv.appendChild(spanescola)
    escolaDiv.appendChild(spanstatus)

    escolasDiv.appendChild(escolaDiv)
  })
}

window.addEventListener('load', () => {
  lerEscolas()
})

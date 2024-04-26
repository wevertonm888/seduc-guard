function menu() {
  setTimeout(() => {
    window.location.href = './gestor.html'
  }, 400)
}

var denuncias

function lerDenuncias() {
  denuncias = JSON.parse(localStorage.getItem('denuncias'))

  denuncias.forEach((d) => {
    let denunciasLista = document.getElementById('denunciasLista')

    let denucia = document.createElement('div')
    denucia.classList.add('denuncias')
    denucia.onclick = function () {
      localStorage.setItem('detalheDenuncia', JSON.stringify(d))

      setTimeout(() => {
        window.location.href = './detalhes_denuncia.html'
      }, 500)
    }

    let spanTipo = document.createElement('span')
    spanTipo.innerText = d.tipo_de_denuncia
    spanTipo.classList.add('descricao')

    let spanNome = document.createElement('span')
    spanNome.innerText = d.nome_aluno
    spanNome.classList.add('descricao')

    let spanData = document.createElement('span')
    spanData.innerText = new Date(d.data).toLocaleDateString('pt-BR')
    spanData.classList.add('descricao')

    let spanStatus = document.createElement('span')
    spanStatus.innerText = d.status
    spanStatus.classList.add('descricao')
    if (d.status === 'Aberto') {
      spanStatus.classList.add('status_aberto')
    } else {
      spanStatus.classList.add('status_resolvido')
    }

    denucia.appendChild(spanTipo)
    denucia.appendChild(spanNome)
    denucia.appendChild(spanData)
    denucia.appendChild(spanStatus)

    denunciasLista.appendChild(denucia)
  })
}

window.addEventListener('load', () => {
  lerDenuncias()
})

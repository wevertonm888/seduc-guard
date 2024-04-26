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

function criaDenuncia(tipo_de_denuncia) {
  let novaDenuncia = {
    local: '',
    data: new Date(),
    hora: '',
    descricao: '',
    tipo_de_denuncia,
    anonimo: false,
    nome_aluno: '',
    escola_id: 1,
  }

  localStorage.setItem('novaDenuncia', JSON.stringify(novaDenuncia))
  setTimeout(() => {
    window.location.href = './formulario.html'
  }, 500)
}

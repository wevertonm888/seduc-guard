function cancelarDenuncia() {
  localStorage.removeItem('novaDenuncia')
  setTimeout(() => {
    window.location.href = './denuncias.html'
  }, 500)
}

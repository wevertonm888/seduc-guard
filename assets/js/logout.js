function logout() {
  localStorage.removeItem('logado')
  window.location.href = './index.html'
}

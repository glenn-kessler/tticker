window.onload = function () {
  divdebug= document.getElementById('debug')
  p = divdebug.getElementsByTagName('p')
  for (let i = 0; i < p.length; i++) {
    p[i].onclick = function()
    { 
      this.innerHTML =  'YOU CLICKED ME!'
    }
  }
}

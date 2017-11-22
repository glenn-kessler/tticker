window.onload = function () {
  divdebug= document.getElementById('debug')
  _p = divdebug.getElementsByTagName('p')

  for (let i = 0; i < _p.length; i++) {
    _p[i].onclick = function() { 
      this.innerHTML =  'YOU CLICKED ME!'
    }
    _p[i].oncontextmenu = function() {
      this.innerHTML = 'YOU RIGHT CLICKED ME!'
    }
  }
}

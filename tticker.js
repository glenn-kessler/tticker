window.onload = function () {
  tticker.init()

  _debug = document.getElementById('debug')
  _p = _debug.getElementsByTagName('p')

  for (let i = 0; i < _p.length; i++) {
    _p[i].onclick = function() { 
      this.innerHTML =  'YOU CLICKED ME!'
    }
    _p[i].oncontextmenu = function() {
      this.innerHTML = 'YOU CLICKED ME RIGHT!'
      return false
    }
  }
}

var tticker = {
  sheet : new Array(6),
  cols : 7,
  rows : 6,
  frei : '0',
  
  init : function()
  {
    let cols = this.cols;
    let rows = this.rows;
    let frei = this.frei;

    for (let y = 0; y < rows ; y++) { 
      this.sheet[y] = new Array(cols);
  
      for (let x = 0; x < cols; x++)
        this.sheet[y][x] = frei;
    }
  },
}
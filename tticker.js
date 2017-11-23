window.onload = function () {
  tticker.initHTML()
}

var tticker = {
  cols : 7,
  rows : 6,
  fil : 13,

  initHTML : function () {
    let textField = document.getElementById('debug')
    let str = '<table>'
    let td = '<td'
    let counter = ' data-counter=0'
    let clickedLeft = ' onclick=window.tticker.dataCounter(this,1)'
    let clickedRight = ' oncontextmenu=window.tticker.dataCounter(this,-1)'
    let end = '> Z </td>'

    for (let y = 0; y < this.rows; y++) {
      str += '<tr>'
      for (let x = 0; x < this.cols; x++) {
        _x = ' data-x=' + String(x)
        _y = ' data-y=' + String(y)
        id = ' id='  + String(y)  + String(x)
        str += td + id + _x + _y + counter + clickedLeft + clickedRight + end
      }
      str += '</tr>'
    }
    str += '</table>'

    textField.innerHTML = str
  },

  dataCounter : function (ev, int1) {
    count = parseInt(ev.getAttribute("data-counter"))
    if (count <= 0 && int1 == -1) {
      count = 0
      ev.setAttribute("data-counter", "0")
    } 
    else {
      count = count+int1
      ev.setAttribute("data-counter", count)
    } 
    this.ticker(ev, count)
  },

  ticker : function (ev, count) {
    let str = ''
    let remaining = ['', '|', '||', '|||', '||||']
    let ticks = count % 5
    let i = parseInt(count / 5)
    let j = 0

    for (i; i > 0; i--) {
      str += '<s>||||</s> '
      j++
      if (j >= 2) {
        j = 0
        str += '<br>'
      }
    }
    str += remaining[ticks]
    ev.innerHTML = str
    console.log(str)
    console.log(ticks)
  },
}

window.tticker = tticker
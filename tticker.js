window.tticker = {
  rows: 4,
  tasks: [''],

  pushTask: function() {
    let text = document.getElementById('text').value;
    if (text != '') {
      this.tasks.push(text)
    }
    this.initHTML() // display
  },

  popTask: function(ev) {
    if ( this.tasks.length > 1)
      this.tasks.pop()

    this.initHTML() // display
  },

  pushOrPopTask: function(ev, text) {
    if (ev.key === 'Enter') // on Enter push()
      if (text != '')
        this.tasks.push(text)

    if (ev.key==='Escape') // on Escape pop()
      if (this.tasks.length > 1)
        this.tasks.pop()

    this.initHTML() // display
  },

  initHTML: function () {
    let textField = document.getElementById('debug')
    let str = '<table>'
    let td = '<td'
    let counter = ' data-counter=0'
    let clickedLeft = ' onclick=window.tticker.dataCounter(this,1)'
    let clickedRight = ' oncontextmenu=window.tticker.dataCounter(this,-1)'
    let end = '> </td>'

    for (let y = 0; y < this.rows; y++) {
      str += '<tr>'
      if (y==0) {
        for (name in this.tasks) {
          str += '<th>' + this.tasks[name] + '</th>'
        }
      }
      else {
        for (x in this.tasks) {
          _x = ' data-x=' + String(x)
          _y = ' data-y=' + String(y)
          id = ' id='  + String(y)  + String(x)
          str += td + id + _x + _y + counter + clickedLeft + clickedRight + end
        }
      }
      str += '</tr>'
    }
    str += '</table>'

    textField.innerHTML = str
  },

  // int1 = ( +1 || -1 )
  dataCounter: function (ev, int1) {
    count = parseInt(ev.getAttribute("data-counter"))

    //
    if (count <= 0 && int1 == -1)
      count = 0
    else
      count = count+int1
    ev.setAttribute("data-counter", count)
    this.ticker(ev, count)
  },

  ticker: function (ev, count) {
    let str = ''
    let remaining = ['', '|', '||', '|||', '||||']
    let ticks = count % 5
    let i = parseInt(count / 5)
    let j = 0
   
    // place count/5 times full tick-blocks
    for (i; i > 0; i--) {
      str += '<s>||||</s> '
      j++
      // linebreak after each two full tick-blocks
      if (j >= 2) {
        j = 0
        str += '<br>'
      }
    }
    // place non-full tick-blocks
    str += remaining[ticks]
    ev.innerHTML = str
  },
}

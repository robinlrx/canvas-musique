
  const chapter = document.createElement('div')
  // chapter.innerText = 'theremin'

  const fixit = new Audio('./audio/do_ya.wav')
  const kyle7 = new Audio('./audio/kyle7.wav')
  const kyle8 = new Audio('./audio/kyle8.wav')
  const tokyo = new Audio('./audio/tokyo.wav')
  const screen = new Audio('./audio/capture.mp3')


  const BaseAudioContext = window.AudioContext || window.webkitAudioContext
  const context = new BaseAudioContext()

  const oscillator = context.createOscillator()
  oscillator.frequency.value = 100
  // oscillator.type = 'triangle'

  oscillator.connect(context.destination)
  oscillator.start()

  const range = document.getElementById('range')
  // range.type = 'range'
  range.min = 0
  range.max = 200

  const range2 =  document.getElementById('range2')
  // range2.type = 'range'
  range2.min = 0
  range2.max = 200

  const range3 =  document.getElementById('range3')
  // range3.type = 'range'
  range3.min = 0
  range3.max = 200

  const range4 =  document.getElementById('range4')
  // range4.type = 'range'
  range4.min = 0
  range4.max = 200

  range.addEventListener('input', ev => {
    oscillator.frequency.value = ev.target.value
    console.log(ev.target.value)
  })
  // range.style.width = '100%'

  const canvas = document.getElementById('canvas')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  const ctx = canvas.getContext('2d')



  function drawCircle(){
    ctx.fillStyle = '#263238'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    const circle = new Path2D()

    let r1 = range.value/4
    let x1 = 100
    let y1 = canvas.height/2

    circle.arc(x1, y1, r1 , 0, 2 * Math.PI, true)
    ctx.lineWidth   = 2;
    ctx.strokeStyle = 'blue'
    ctx.stroke(circle)


    const circle2 = new Path2D()

    let r2 = range.value/2
    let x2 = 150
    let y2 = canvas.height/2
    circle2.arc(x2, y2, r2 , 0, 2 * Math.PI, true)
    ctx.lineWidth   = 3;
    ctx.strokeStyle = 'orange'
    ctx.stroke(circle2)



    const circle3 = new Path2D()

    let r3 = range2.value/4
    let x3 = 300
    let y3 = canvas.height/2

    circle3.arc(x3, y3, r3 , 0, 2 * Math.PI, true)
    ctx.lineWidth   = 2;
    ctx.strokeStyle = 'red'
    ctx.stroke(circle3)


    const circle4 = new Path2D()

    let r4 = range2.value/2
    let x4 = 370
    let y4 = canvas.height/2
    circle4.arc(x4, y4, r4 , 0, 2 * Math.PI, true)
    ctx.lineWidth   = 3;
    ctx.strokeStyle = 'green'
    ctx.stroke(circle4)


    const circle5 = new Path2D()

    let r5 = range3.value/4
    let x5 = 500
    let y5 = canvas.height/2

    circle5.arc(x5, y5, r5 , 0, 2 * Math.PI, true)
    ctx.lineWidth   = 2;
    ctx.strokeStyle = 'pink'
    ctx.stroke(circle5)


    const circle6 = new Path2D()

    let r6 = range3.value/2
    let x6 = 590
    let y6 = canvas.height/2
    circle6.arc(x6, y6, r6 , 0, 2 * Math.PI, true)
    ctx.lineWidth   = 3;
    ctx.strokeStyle = 'magenta'
    ctx.stroke(circle6)



    const circle7 = new Path2D()

    let r7 = range4.value/4
    let x7 = 800
    let y7 = canvas.height/2

    circle7.arc(x7, y7, r7 , 0, 2 * Math.PI, true)
    ctx.lineWidth   = 2;
    ctx.strokeStyle = 'yellow'
    ctx.stroke(circle7)


    const circle8 = new Path2D()

    let r8 = range4.value/2
    let x8 = 930
    let y8 = canvas.height/2
    circle8.arc(x8, y8, r8 , 0, 2 * Math.PI, true)
    ctx.lineWidth   = 3;
    ctx.strokeStyle = 'white'
    ctx.stroke(circle8)

    


    let f = x2 - x1
    let g = y2 - y1
    let f2 = x4 - x3
    let g2 = y4 - y3
    let f3 = x6 - x5
    let g3 = y6 - y5
    let f4 = x8 - x7
    let g4 = y8 - y7

    function calcHypotenuse(a, b) {
      return (Math.sqrt((a * a) + (b * b)));
    }

    console.log(`h = ${calcHypotenuse(f,g)}`)
    let h = calcHypotenuse(f,g)
    let h2 = calcHypotenuse(f2,g2)
    let h3 = calcHypotenuse(f3,g3)
    let h4 = calcHypotenuse(f4,g4)
    // console.log(`r1 : ${r1}`)
    // console.log(`r2 : ${r2}`)

    function randomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var y = 0; y < 6; y++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    if(r1 + r2 >= h && r3 + r4 >= h2  && r5 + r6 >= h3 && r7 + r8 >= h4){
      
      ctx.fillStyle = '#4527A0'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

    
    
    }

    if (r1 + r2 >= h) {
      console.log("joue le morceau")
      
      ctx.strokeStyle = randomColor()
      ctx.stroke(circle)

      ctx.strokeStyle = randomColor()
      ctx.stroke(circle2)

      tokyo.play()
      tokyo.loop = false

    }

    if(r3 + r4 >= h2){
      ctx.strokeStyle = randomColor()
      ctx.stroke(circle3)

      ctx.strokeStyle = randomColor()
      ctx.stroke(circle4)

      // setTimeout(function(){ 
        kyle7.play();
        kyle7.loop = false;
      //  }, 5000);
      
      
    }

    if(r5 + r6 >= h3){

      ctx.strokeStyle = randomColor()
      ctx.stroke(circle5)

      ctx.strokeStyle = randomColor()
      ctx.stroke(circle6)
      
     

      // setTimeout(function(){ 
        fixit.play()
        fixit.loop = false
      //  }, 1000);
    }

    if(r7 + r8 >= h4){

      ctx.strokeStyle = randomColor()
      ctx.stroke(circle7)

      ctx.strokeStyle = randomColor()
      ctx.stroke(circle8)
      
      kyle8.play()
      kyle8.loop = false
    }

  


    requestAnimationFrame(drawCircle)
  }

  drawCircle()

  const section = document.createElement('section')
  section.append(chapter)
  // section.append(range)
  // section.append(range2)
  // section.append(range3)
  // section.append(range4)

  let blob;

  function telecharger(event) {
    document.addEventListener("keydown", function(event) {
      if (event.key === "s") {
        const can = document.querySelector('canvas')
        screen.play()
        screen.loop = false
        console.log("enregistrer")
        blob = can.toBlob(b => send(b))
        
      }
  });
  }

  function send(b) {

    const formData = new FormData()
    formData.append('title', 'Votre capture : ')
    formData.append('experiment', b, 'canvas-rond.jpg')

    fetch('/experiment', {
        method: 'POST',
        body: formData,
    }).then(res => console.log(res.text()))
}

telecharger()
  


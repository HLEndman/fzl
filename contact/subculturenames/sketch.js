
let input;
let img;
let title
let 换一个
let fzl
let saveThis
let color = ['#0000ff', '#ff00f7','#00cc66']
let el1 = ['魔法']
let el2 = ['社恐']
let el3 = ['试验体']
function preload() {
  title = loadImage('title.png')
}

function setup() {
  input = createFileInput(handleFile);
  input.position(100, 460)
  换一个 = createButton('取名');
  换一个.position(10, 458);
  换一个.mousePressed(changeName)
  fzl = createButton('@fzlmagazine')
  fzl.position(360,460)
  fzl.mousePressed(socialMedia)
  //saveThis = createButton('保存')
 // saveThis.position(450,600)
 // saveThis.mousePressed(snapShot)
  noLoop()
}

function draw() {
  
  createCanvas(500, 700)
  fill(225);
  noStroke()
  rect(0,0,500,500)
  image(title, 50, 0, 400, 100)
  textSize(10)
  fill(100)
  text('Programmed by LuwenxiSong, scripted by LuwenxiSong & BenitaGuo from @fzlmagazine', 40, 498)
  fill('blue')
  textSize(14)
  text('仅供个人娱乐，禁止盗用',190,600)
  

  if (img) {
    image(img, 170, 120, 280, 280)
    nameGenerator(10, 360)
  }
  fill(105,105,105)
  textSize(20)
  textStyle(BOLD)
  noStroke()
  text('您的亚名是', 10, 250)
  textSize(18)
  textStyle(NORMAL)
  fill('#999AB8')
  
  
}

function handleFile(file) {
 
  print(file);
  if (file.type === 'image') {
    img = createImg(file.data, '');
    img.hide()
  } else {
    img = null;
  }
}

function nameGenerator(x, y) {
  let one = random(el1)
  let two = random(el2)
  let three = random(el3)
  textSize(40)
  textStyle(BOLD)
  strokeWeight(4);
  stroke('white');
  fill(random(color))
  text(one + two + three, x, y) 
}

function changeName() {
  redraw()
}
function socialMedia() {
  window.open("https://fzl666.github.io/fzl/contact/index.html")
                       }
function snapShot(){
save("qumingji.jpeg")}

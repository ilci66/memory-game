var objects = [
  {id:1, name:"a", src:"1.png"},
  {id:2, name:"b", src:"2.png"},
  {id:3, name:"c", src:"3.png"},
  {id:4, name:"d", src:"4.png"},
  {id:5, name:"e", src:"5.png"},
  {id:6, name:"f", src:"6.png"},
  {id:7, name:"g", src:"7.png"},
  {id:8, name:"h", src:"8.png"},
  {id:9, name:"j", src:"9.png"},
  {id:10, name:"k", src:"10.png"},
  {id:11, name:"l", src:"11.png"},
  {id:12, name:"m", src:"12.png"},
  {id:13, name:"n", src:"13.png"},
  {id:14, name:"o", src:"14.png"},
  {id:15, name:"p", src:"15.png"},
  {id:16, name:"r", src:"16.png"},
  {id:17, name:"s", src:"17.png"},
  {id:18, name:"t", src:"18.png"}
]

let num = 0;

const shuffle = (objects) => {
  for (let i = objects.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = objects[i];
    objects[i] = objects[j];
    objects[j] = temp;
  }

}

window.onload = async () => {

  let sorted = await shuffle(objects);
  // console.log(objects)

  console.log('I loaded')
  let boardContainer = await document.querySelector('.board-container');
  // boardContainer.style.backgroundColor = "black";


  // fill it up once mix it and fill it up again
  const render = (objects) => {
    for(let i = 0; i < objects.length; i++){
      let div = document.createElement("div");



      div.style.background = "red";
      div.classList.add(`${objects[i]["src"]}`)
      boardContainer.appendChild(div)
    
    };
  }
  await render(objects);
  await shuffle(objects);
  await render(objects);

}

window.addEventListener('click', (e) => {
  console.log("num open images ==>", num)

  console.log("target =>",e.target)
    


  var target1;
  var target2;

  if(num === 0){
    target1 = e.target;

    let image = document.createElement("img");
    image.style.maxWidth= '64px';
    image.style.maxheight= '100%';
  
    console.log("class==>", e.target.classList[0])
  
    image.src = `pngs/${e.target.classList[0]}`;
    image.style.margin= "0 auto";
    e.target.appendChild(image)
    num += 1;


  } else if(num == 1) {
    target2 = e.target;

    console.log("target =>",e.target)
    
    let image = document.createElement("img");
    image.style.maxWidth= '64px';
    image.style.maxheight= '100%';

    console.log("class==>", e.target.classList[0])

    image.src = `pngs/${e.target.classList[0]}`;
    image.style.margin= "0 auto";
    e.target.appendChild(image)
    num += 1;
    
    if(target1 == target2) {
      alert('yay!')
    }
  } else {
  let boardContainer = document.querySelector('.board-container');

  }

  

})
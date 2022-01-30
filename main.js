var objects = [
  {id:1, src:"1.png"},
  {id:2, src:"2.png"},
  {id:3, src:"3.png"},
  {id:4, src:"4.png"},
  {id:5, src:"5.png"},
  {id:6, src:"6.png"},
  {id:7, src:"7.png"},
  {id:8, src:"8.png"},
  {id:9, src:"9.png"},
  {id:10, src:"10.png"},
  {id:11, src:"11.png"},
  {id:12, src:"12.png"},
  {id:13, src:"13.png"},
  {id:14, src:"14.png"},
  {id:15, src:"15.png"},
  {id:16, src:"16.png"},
  {id:17, src:"17.png"},
  {id:18, src:"18.png"}
];

let num = 0;
var target1;
var target2;

const shuffle = (objects) => {
  for (let i = objects.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = objects[i];
    objects[i] = objects[j];
    objects[j] = temp;
  }
}

window.onload = async () => {
  console.log('I loaded')
  let boardContainer = await document.querySelector('.board-container');

  const doubleAndRender = async (objects, objectsLength) => {
    for (let i = 0; i < objectsLength; i++){
      console.log("i")
      objects.push({"id":19+i, "src": `${i+1}.png`})
    }
    await shuffle(objects);
    await shuffle(objects);
    await shuffle(objects);


    for(let i = 0; i < objects.length; i++){
      let div = document.createElement("div");

      div.style.background = "red";
      div.classList.add("grid-item", `${objects[i]["id"]}.png`)
      div.setAttribute("id", `${objects[i]["id"]}`)
      boardContainer.appendChild(div)
    };
  };
  await shuffle(objects);
  await doubleAndRender(objects, 18);
}

window.addEventListener('click', (e) => {
  
  let pngNum;
  if(e.target.classList.contains("grid-item") && e.target.classList[1] && !e.target.classList.contains("active")){
    console.log("Now clicked on =>", e.target.classList[1])
    if(e.target.classList[1].split(".")[0] <= 18){
      pngNum = e.target.classList[1].split(".")[0];
    } else {
      pngNum = e.target.classList[1].split(".")[0] - 18;
    }
    console.log("++++++++++", pngNum)
    if(num == 0){
      target1 = e.target;
      let image = document.createElement("img");
      image.src = `pngs/${pngNum}.png`
      image.style.maxWidth= '64px';
      target1.appendChild(image)
      num += 1;
      
    } else if(num == 1){
      if(target1 !== e.target){

        target2 = e.target;
        let image = document.createElement("img");
        image.src = `pngs/${pngNum}.png`
        image.style.maxWidth= '64px';
        target2.appendChild(image)
        num += 1;
      }
        
    } else if(num == 2){
      console.log("num is 2", "t1 ==>", target1, "t2 ==>", target2)
      if(parseInt(target1.id) > 18 && (parseInt(target2.id) > 18)) { 
        console.log("both high, not a match"); 
        num = 0; 
        target1.removeChild(target1.childNodes[0]); 
        target2.removeChild(target2.childNodes[0]);
      } else if (parseInt(target1.id) <= 18 && (parseInt(target2.id) <= 18)){ 
        console.log("both low, not a match");
        num = 0; 
        target1.removeChild(target1.childNodes[0]); 
        target2.removeChild(target2.childNodes[0]);
      } else {
        if(parseInt(target1.id) > 18) {
          if(parseInt(target1.id) - 18 == parseInt(target2.id)){
            target1.classList.add("active")
            target2.classList.add("active")

            target1.style.background = "white";
            target2.style.background = "white";
            console.log("it's match")
            num = 0;
          }else { 
            console.log("no match, not a match") 
            target1.removeChild(target1.childNodes[0]); 
            target2.removeChild(target2.childNodes[0]);
            num = 0
          }
        }else if(parseInt(target2.id) > 18) {
          if(parseInt(target2.id) - 18 == parseInt(target1.id)){
            target1.classList.add("active")
            target2.classList.add("active")

            target1.style.background = "white";
            target2.style.background = "white";

            console.log("it's match")
            num = 0;
          } else {
            console.log("no match")
            target1.removeChild(target1.childNodes[0]); 
            target2.removeChild(target2.childNodes[0]);
            num = 0; 
          }
        }
      } 
    }
  }
})  

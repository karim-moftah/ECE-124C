
let header = document.querySelector(".landing");

let img = [  "pexels-photo-1552242.jpeg" , "pexels-photo-2261477.jpeg"];

setInterval(() => {
    let randomNumber = Math.floor(Math.random() * img.length ) ;

header.style.backgroundImage = 'url("'  + img[randomNumber] + '" )' ;

header.style.transition = '0.5s all' ;

} , 3000);






  let toggleBtn = document.querySelector(".menu");
  let tlink = document.querySelector(".list");


  toggleBtn.onclick = function () {
  
      tlink.classList.toggle("open");
  };
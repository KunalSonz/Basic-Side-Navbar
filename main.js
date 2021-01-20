const lisbtn = document.querySelector('.libtn');
const lisoc = document.querySelector('.socialcontent');
let btnopen = false;
lisbtn.addEventListener('click',() => {
  if(!btnopen){
    lisoc.classList.add('open');
    btnopen = true;
  }
  else{
    lisoc.classList.remove('open');
    btnopen = false;
  }
  
})

const side = document.querySelector('#sidenav');
const hammbtn = document.querySelector('.hambtn');
const dashhbtn =document.querySelector('.hambtn-dash');
let btnhamclick = false;
hammbtn.addEventListener('click',() => {
  if(!btnhamclick){
    hammbtn.classList.add('click');
    side.classList.add('click');
    dashhbtn.classList.add('change')
    btnhamclick = true;
  }else{
    hammbtn.classList.remove('click');
    side.classList.remove('click');
    dashhbtn.classList.remove('change')
    btnhamclick = false;
  }
})


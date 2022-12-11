//let box =document.getElementById('first');
//let width=50;
//document.body.onkeyup=function(e){
  //  if(e.keyCode===32){
    //    box.style.width=`${width}px`}
//}
  //  let heidht=50;
    //document.body.onkeyup=function(e){
      //  if(e.keyCode===13){
        //    box.style.height=`${height}px`
        //}
    //}
    
//var x = pageX;
//var y= pageY;
//if(x=50 && y=50){
  //  document.getElementById('second').style.backgroundColor="red"

//}

let axtarish = document.querySelector('#axtarish');
let fifth = document.querySelector('#fifth');
let close = document.querySelector('#close');

axtarish.addEventListener('click',()=>{
    fifth.classList.add('active')
})

close.addEventListener('click',()=>{
    fifth.classList.remove('active')
})
let language=document.querySelector('#language');
let uchbucaq=document.querySelector('#uchbucaq');
let arrow= document.querySelector('#arrow');
 
language.addEventListener('click',() => {
    uchbucaq.classList.toggle('active')
})


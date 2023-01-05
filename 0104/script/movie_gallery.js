let n=1; //초기값
const img_list = document.querySelectorAll('.lnb>li');
const left_btn = document.querySelector('i.fa-angle-left');
const right_btn = document.querySelector('i.fa-angle-right');

document.getElementById('page').innerHTML=n +'/8';

img_list.forEach((el,index)=>{
  el.onclick=() =>{
    console.log(index);
    n=index+1;

    document.getElementById('page').innerHTML=n +'/8';
    document.getElementById('photo').src='./실습과제2/movie_image0'+n+'.jpg';
  }
});

left_btn.addEventListener('click',function(){
  if(n==1){
    n=8;
  }
  else{
    n--;
  }
  console.log(n);
  document.getElementById('page').innerHTML=n+'/8';
  document.getElementById('photo').src='./실습과제2/movie_image0'+n+'.jpg';
});

right_btn.addEventListener('click',function(){
  if(n==8){
    n=1;
  }
  else{
    n++;
  }
  document.getElementById('page').innerHTML=n+'/8';
  document.getElementById('photo').src='./실습과제2/movie_image0'+n+'.jpg';
})
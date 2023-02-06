$(function(){

  $(window).scroll(function(){
    let sPos = $(this).scrollTop();
    console.log(sPos);

  // 스크롤 기능을 사용하여 header, gnb에 서식을 적용하기
    if(sPos>=800){
      $('header').addClass('h_on');
      $('header .gnb a').addClass('on');
      $('header i.fas').addClass('on');
      $('header h1 img').attr('src','./images/logo-casper_black.png');

    }else{
      $('header').removeClass('h_on');
      $('header .gnb a').removeClass('on');
      $('header i.fas').removeClass('on');
      $('header h1 img').attr('src','./images/logo-casper-white.png');
    }

  //내비게이션 클릭시 해당 콘텐츠가 상단으로 올라오게 하기


  });
});
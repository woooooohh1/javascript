$(function(){
  let gnb = $('.gnb');

  gnb.mouseenter(function(){
    $('#h_bottom').stop().animate({'height':'320px'},500,'easeOutCubic');
    $('.sub').stop().fadeIn(500);
  });

  gnb.mouseleave(function(){
    $('#h_bottom').stop().animate({'height':'46px'},500,'easeOutCubic');
    $('.sub').stop().fadeOut(500);
  });

  //메인 좌,우 슬라이드
  let l_btn = $('.slide i.fa-angle-left');
  let r_btn = $('.slide i.fa-angle-right');
  //1. 5번 이미지를 1번의 앞쪽으로 자리를 배치합니다.
  $('.slide li:last-child').insertBefore('.slide li:first-child');
  $('.slide ul').css('margin-left','-1600px');

  // 2. 움직이는 함수
  //왼쪽
  function moveLeft(){
    console.log('왼쪽');
    $('.slide ul').animate({'margin-left':'-3200px'},300,function(){
      $('.slide li:first-child').insertAfter('.slide li:last-child');
      $('.slide ul').css('margin-left','-1600px');
    });
  }
  //오른쪽
  function moveRight(){
    $('.slide ul').animate({'margin-left':'0px'},300,function(){
      $('.slide li:last-child').insertBefore('.slide li:first-child');
      $('.slide ul').css('margin-left','-1600px');
    });
  }

  //3. 시간객체로 3초마다 함수 호출하기
  let Timer = setInterval(moveLeft,3000);
  

  //4. 좌,우 버튼 클릭 시 각각 해당하는 함수 호출하여 움직이게 하기
  
  l_btn.click(function(){
    
    moveLeft();
  });
  r_btn.click(function(){
    moveRight();
  }); 
  
  //좌우 버튼에 마우스 오버시 시간을 제거해서 슬라이드 멈추게하기
  $('.slide i.fas').hover(function(){
    clearInterval(Timer);
  },function(){
    Timer =setInterval(moveLeft,3000);
  });
});
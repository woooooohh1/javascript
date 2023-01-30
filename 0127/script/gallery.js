$(function(){
  //1. 변수선언
  let g_navi = $('.g_navi a');
  let g_list = $('.g_list a');
  let total_btn = $('.g_navi li:first-child a');
  let plan_btn = $('.g_navi li:nth-child(2) a');
  let de_btn = $('.g_navi li:nth-child(3) a');
  let ui_btn = $('.g_navi li:nth-child(4) a');
  let co_btn = $('.g_navi li:last-child a');

  //2. 메뉴 클릭 이벤트와 서식적용
  g_navi.click(function(){
    $('.g_navi a').removeClass('act');
    $(this).addClass('act');
    return false; //새로고침 방지
  });

  //3. 갤러리 이미지 오버시 캡션 나오게
  g_list.hover(function(){
    $(this).find('span').stop().animate({'bottom':'0px'},300);
  },function(){
    $(this).find('span').stop().animate({'bottom':'-60px'},300);
  });

  //4. 이미지 클릭시 해당 src값을 가져와서 모달윈도 띄우기
  g_list.click(function(){
    let src=$(this).attr('href');
    let title=$(this).find('span').text();//내용을 가져와라
    let i_num = $(this).parent().index() +1; //인덱스 번호 호출
    console.log(i_num);
    console.log(src);
    let modal = `
    <div class="modal">
      <div class="center">
        <h3>${title}</h3>
        <img src=${src} alt="">
        <i class="fa-regular fa-circle-xmark"></i>
        <i class="fa-solid fa-angle-left"></i>
        <i class="fa-solid fa-angle-right"></i>
        <span>${i_num}/12</span>
      </div>
    </div>
    `;
    //body의 맨뒤에 내용을 추가해라
    $('body').append(modal);

    //닫기 버튼을 누르면 모당창 숨기기
    $('.modal i.fa-regular').click(function(){
      $('.modal').fadeOut();
    });

    //좌우 버튼 클릭시 각각 해당 이미지가 나오게
    $('.modal i.fa-angle-left').click(function(){
      moverLeft();
      img_check();
    });
    $('.modal i.fa-angle-right').click(function(){
      moveRight();
      img_check();
    });
    function moverLeft(){
      if(i_num==1){
        i_num=12;
      }
      else{
        i_num--;
      }
      console.log(i_num);
      $('.modal h3').text($('.g_list li').eq(i_num-1).find('span').text());
      $('.modal span').text(i_num+'/12');

      // $('.modal img').attr('src',`./images/img${i_num}.jpg`);
    }
    function moveRight(){
      if(i_num==12){
        i_num=1;
      }
      else{
        i_num++;
      }
      console.log(i_num);
      $('.modal h3').text($('.g_list li').eq(i_num-1).find('span').text());
      // $('.modal img').attr('src',`./images/img${i_num}.jpg`);
      $('.modal span').text(i_num+'/12');
    }
    //인덱스 번호가 4,9,11일때 확장자를 png교체
    function img_check(){
      if(i_num==4||i_num==9||i_num==11){
        $('.modal img').attr('src',`./images/img${i_num}.png`)
      }
      else{
        $('.modal img').attr('src',`./images/img${i_num}.jpg`);
      }
    }
    return false;

  });
  
  //5. 갤러리 메뉴를 클릭시 각각 해당 이미지 목록만 보이게 하기
  total_btn.click(function(){
    $('.total').fadeIn();
  })

  plan_btn.click(function(){
    $('.total').hide(); //모두 숨기고
    $('.plan').fadeIn(); //해당 목록만 보이게
  });
  
  de_btn.click(function(){
    $('.total').hide(); //모두 숨기고
    $('.design').fadeIn(); //해당 목록만 보이게
  });

  ui_btn.click(function(){
    $('.total').hide(); //모두 숨기고
    $('.ui').fadeIn(); //해당 목록만 보이게
  });

  co_btn.click(function(){
    $('.total').hide(); //모두 숨기고
    $('.coding').fadeIn(); //해당 목록만 보이게
  });


});
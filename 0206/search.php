<!doctype html>
<html lang="ko">
<head>
  <meta charset="utf-8">
  <meta name="veiwport" content="width=device-width, initial-scale=1">
  <title>현대자동차 시승신청 예약 데이터베이스 자료 출력</title>
    <!-- 초기화 -->
  <link href="./css/reset.css" rel="stylesheet" type="text/css">
  <!-- 기본서식, 공통서식 -->
  <link href="./css/base.css" rel="stylesheet" type="text/css">
  <!-- 레이아웃서식 -->
  <link href="./css/layout.css" rel="stylesheet" type="text/css">
  <!-- 아이콘폰트 주소 -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

  <!-- css3추가속성시 접두사 자동으로 붙여주는 스크립트 -->
  <script src="./script/prefixfree.min.js"></script>
<style>
        header{ background:#000;}
        main{padding:140px 0px 50px 0px;}
        .car_reverse{
            border:1px solid #ccc;
            border-collapse:collapse;
            width:1000px;
            margin:0px auto 30px auto;
    }
        .car_reverse caption{
            font-weight:bold;
            font-size:20px;
            padding:20px 0px;
        }
        .car_reverse td, .car_reverse th{
            border:1px solid #ccc;
            line-height:34px;
            text-align:center;
        }
        .t_drive_btn{ text-align:center;}
        .t_drive_btn > a{
            border:1px solid #333;
            padding:4px 10px;
            text-decoration:none;
            color:#333;
        }
    
    .search_box{
        width:1000px;
        border:1px solid #ccc;
        padding:12px 0px;
        margin:20px auto;
        text-align:center;
        background:#ccc;
    }
    .search_box legend{display:none;}
    .search_box input[type=text]{
        width:300px;height:20px;
    }
    .search_box input[type=submit]{
        padding:2px 10px;
        background:#000;color:#fff;
        transform:translateY(2px);
    }
    </style>
</head>
<body>
  <header>
      <h1>
        <a href="index.html" title="메인페이지로 바로가기">
          <img src="./images/logo-casper-white.png" alt="상단로고">
        </a>
      </h1>

      <!-- 상단 스크롤시 고정 내비게이션 -->
      <nav>
        <ul class="gnb">
          <li><a href="#" title="소개">소개</a></li>
          <li><a href="#" title="체험">체험</a></li>
          <li><a href="#" title="이벤트">이벤트</a></li>
          <li><a href="#" title="구매안내">구매안내</a></li>
          <li><a href="#" title="고객지원">고객지원</a></li>
        </ul>
      </nav>

      <i class="fas fa-user"></i>
      <i class="fas fa-bell"></i><!-- 알림아이콘 -->
    </header>
    <main>
  <?php

  $mysql_host='localhost';
  $mysql_user='dngus1703';
  $mysql_password='Dmsgk1209!';
  $mysql_db='dngus1703';

  //데이터베이스 계정 연결하기
  $conn = mysqli_connect($mysql_host, $mysql_user, $mysql_password, $mysql_db);

  $search_txt = $_POST['search_txt'];

  if(mysqli_connect_errno()){
    printf("%s \n", mysqli_connect_error());
    exit;
  }

  //4. 데이터 조회하기
  $query = "select * from test_drive where name='$search_txt'";
  $result = mysqli_query($conn, $query); //조회결과값을 변수에 담는다. 

  print "<table class='car_reverse'><caption>현대자동차 시승신청 예약조회 결과</caption><tr>" .
  "<th>번호</th>" .
  "<th>성명</th>" . 
  "<th>전화번호</th>" .
  "<th>SNS수신여부</th>". 
  "<th>이메일주소</th>".
  "<th>희망지점</th>".
  "<th>시승차</th>".
  "<th>보유차</th>".
  "<th>예약날짜</th>".
  "</tr>";

  while($row = mysqli_fetch_row($result)){
  print "<tr><td>" . $row[0] . "</td>" . 
  "<td>" . $row[1] . "</td>" . 
  "<td>" . $row[2] . "</td>" . 
  "<td>" . $row[3] . "</td>". 
  "<td>" . $row[4] . "</td>". 
  "<td>" . $row[5] . "</td>". 
  "<td>" . $row[6] . "</td>". 
  "<td>" . $row[7] . "</td>".
  "<td>" . $row[8] . "</td></tr>";
  }        
  print "</table>";
  mysqli_free_result($result);
  mysqli_close($conn);
  ?>
  <br>
        <p class="t_drive_btn"><a href="test_drive.html" title="데이터 입력하기">시승신청예약 하기</a></p>

  </main>
  <footer>
    <div>
      <h2>
        <img src="./images/logo-hyundai.a9ebdc6.png" alt="현대 로고">
      </h2>
      <div>
        <ul class="u01">
          <li>이용약관</li>
          <li>개인정보 처리방침</li>
          <li>저작권 안내</li>
          <li>공동인증서 안내</li>
          <li>현대자동차 홈페이지</li>
        </ul>
        <ul class="u02">
          <li>사업자등록번호 : 101-81-09147</li>
          <li>통신판매업신고번호 : 2002-01546</li>
          <li>대표이사 : 장재훈 <a href="" title="">사업자정보확인></a></li>
          <li>캐스퍼 고객센터 : 080-500-6000</li>
        </ul>
        <ul>
          <li>주소 : 서울시 서초구 현동로 12</li>
          <li>호스팅서비스 제공 : 현대오토에버(주)</li>
        </ul>
        <address>COPYRIGHT &COPY; HYUNDAI MOTOR COMPANY, ALL RIGHTS RESERVED</address>
      </div>
    </div>
  </footer>
  </body>
</html>
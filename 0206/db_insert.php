<?php 

$name = $_POST['name'];
$phone = $_POST['phone'];
$sns = $_POST['sns'];
$email = $_POST['email'];
$region = $_POST['region'];
$s_car = $_POST['s_car'];
$my_car = $_POST['my_car'];
$s_date = $_POST['s_date'];



$mysql_host = 'localhost';
$mysql_user = 'dngus1703';
$mysql_password = 'Dmsgk1209!';
$mysql_db = 'dngus1703';

$conn = mysqli_connect($mysql_host, $mysql_user, $mysql_password, $mysql_db);

if(!$conn) {
    die('연결실패:' .mysqli_connect_error());
}

$query = "INSERT INTO test_drive (name, phone, sns, email, region, s_car, my_car, s_date) VALUES ('$name', '$phone', '$sns' ,'$email', '$region', '$s_car', '$my_car', '$s_date')";

$result = mysqli_query($conn, $query);

if($result){
    echo '입력완료';
} else {
    echo '입력오류';
    echo $query;
}

?>
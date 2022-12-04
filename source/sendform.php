<?php

$name = $_POST['name'];
$phone = $_POST['phone']; 
$auto = $_POST['auto']; 
$arenda = $_POST['arenda'];
$vremya = $_POST['vremya'];
$arenda2 = $_POST['arenda2'];
$vremya2 = $_POST['vremya2'];
$token = "5558208474:AAGi0tFODUH2sQc8KoBnzsPH_BbRdkYO8Pg"; // Тут пишем токен
$chat_id = "-777191388"; // Тут пишем ID группы, куда будут отправляться сообщения
$sitename = "auto.jo"; //Указываем название сайта

$arr = array(

  'Заказ с сайта: ' => $sitename,
  'Имя: ' => $name,
  'Телефон: ' => $phone,
  'Почта' => $email,
  'Выбор автомобиля' => $auto,
  'Дата начала аренды' => $arenda,
  'Время начала аренды' => $vremya,
  'Дата окончания аренды' => $arenda2,
  'Время окончания аркенды' => $vremya2,

);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

?>
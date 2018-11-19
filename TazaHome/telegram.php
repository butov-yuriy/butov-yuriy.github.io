<?php

/* https://api.telegram.org/bot754974407:AAHXQY6-OKFqnhsmrKeN4hUg-Rgr4VWd_ag/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$problem = $_POST['user_problem'];
document.getElementById('user_name').value = "";
document.getElementById('user_phone').value = "";
document.getElementById('user_problem').value = "";
$token = "754974407:AAHXQY6-OKFqnhsmrKeN4hUg-Rgr4VWd_ag";
$chat_id = "-200159277";
$arr = array(
  'Дата: ' => date("Y-m-d H:i:s"),
  'Имя клиента: ' => $name,
  'Телефон: ' => $phone,
  'Описание проблемы:' => $problem
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  echo('Success');
} else {
  echo "Error";
}
?>
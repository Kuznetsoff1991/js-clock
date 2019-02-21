<?php
  $info = $_POST['user_info'];
 	$name = $_POST['user_name2']; // input name
 	$phone = $_POST['user_phone2']; // input phone
 	$contacts = $_POST['user_contacts2']; // input phone
  $address = $_POST['user_address']; // input phone

	$message = "Клиент оставил заявку на покупку".PHP_EOL."Название товара: ".$info.PHP_EOL."Имя: ".$name.PHP_EOL."Телефон: ".$phone.PHP_EOL."Другие контакты: ".$contacts.PHP_EOL."Адрес клиента: ".$address;

	send(3,$message); // id беседы с заказчиком

	function send($id , $message) {
    $url = 'https://api.vk.com/method/messages.send';
    $params = array(
      'chat_id' => $id,    // Кому отправляем
      'message' => $message,   // Что отправляем
      'access_token' => 'f4d53d7bd8c6015af1997bf528d7e8abdc967b207ca447dcae05fc358a033623f043f5e507171e059cf9c',  
      'v' => '5.62',
    );

    $result = file_get_contents($url, false, stream_context_create(array(
        'http' => array(
          'method'  => 'POST',
          'header'  => 'Content-type: application/x-www-form-urlencoded',
          'content' => http_build_query($params)
        )
    )));
	}
?>

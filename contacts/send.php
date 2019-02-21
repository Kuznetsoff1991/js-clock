<?php
// Файлы phpmailer
require 'class.phpmailer.php';
require 'class.smtp.php';

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$place1 = $_POST['user_place1'];
$place2 = $_POST['user_place2'];

// Настройки
$mail = new PHPMailer;

$mail->isSMTP(); 
$mail->Host = 'smtp.mail.ru';  
$mail->SMTPAuth = true;                      
$mail->Username = 'dmitriykuznetsov91@mail.ru'; // Ваш логин в Яндексе. Именно логин, без @yandex.ru
$mail->Password = 'dk91lvbnhbq'; // Ваш пароль
$mail->SMTPSecure = 'ssl';                            
$mail->Port = 465;
$mail->setFrom('dmitriykuznetsov91@mail.ru'); // Ваш Email
$mail->addAddress('dmitriykuznetsov91@yandex.ru'); // Email получателя
// $mail->addAddress('example@gmail.com'); // Еще один email, если нужно.

// Прикрепление файлов
  for ($ct = 0; $ct < count($_FILES['userfile']['tmp_name']); $ct++) {
        $uploadfile = tempnam(sys_get_temp_dir(), sha1($_FILES['userfile']['name'][$ct]));
        $filename = $_FILES['userfile']['name'][$ct];
        if (move_uploaded_file($_FILES['userfile']['tmp_name'][$ct], $uploadfile)) {
            $mail->addAttachment($uploadfile, $filename);
        } else {
            $msg .= 'Failed to move file to ' . $uploadfile;
        }
    }   
                                 
// Письмо
$mail->isHTML(true); 
$mail->Subject = "Новая заявка на сайте: BTG - Business Trans Group"; // Заголовок письма
$mail->Body    = "Пользователь оставил свои данные <br> Имя: $name <br>Телефон: $phone <br>Откуда: $place1 <br>Куда: $place2"; // Текст письма

// Результат
if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'ok';
}
?>
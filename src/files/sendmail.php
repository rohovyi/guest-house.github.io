<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->IsHtml(true);

$mail->setFrom('rogers.paul.kh.kr@gmail.com', 'Letter');

$mail->addAddress('pavlorohovyi@gmail.com');


$mail->Subject = 'Hello!';

$hand = "Right";
if ($_POST['hand'] == "left") {
    $hand = "Left";
}

$body = '<h1>Congratulations!! It\'s a MAIL!!!</h1>';

if (trim(!empty($_POST['name']))) {
    $body .= '<p><strong>Name:</strong> ' . $_POST['name'] . '</p>';
}
if (trim(!empty($_POST['email']))) {
    $body .= '<p><strong>Email:</strong> ' . $_POST['email'] . '</p>';
}
if (trim(!empty($_POST['hand']))) {
    $body .= '<p><strong>Hand:</strong> ' . $hand . '</p>';
}
if (trim(!empty($_POST['age']))) {
    $body .= '<p><strong>Name:</strong> ' . $_POST['age'] . '</p>';
}
if (trim(!empty($_POST['message']))) {
    $body .= '<p><strong>Message:</strong> ' . $_POST['message'] . '</p>';
}

if (!empty($_FILES['image']['tmp_name'])) {
    $filePath = __DIR__ . "/files/" . $_FILES['image']['name'];
    if (copy($_FILES['image']['tmp_name'], $filePath)) {
        $fileAttach = $filePath;
        $body .= '<p><strong>Photo in :</strong> ';
        $mail->addAttachment($fileAttach);
    }
}

$mail->Body = $body;

if (!$mail->send()) {
    $message = 'Your mail has not been sent';
} else {
    $message = 'Your letter has been sent';
}

$response  = ['message' => $message];

header('Content-type: aplication/json');
echo json_encode($response);

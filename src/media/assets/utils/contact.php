<?php

$to = 'mail'; // Replace with your email address

// No need to edit below this line
if($to) {
	$civilite = $_POST['civilite'];
	$nom = $_POST['nom'];
	$prenom = $_POST['prenom'];
	$mail = $_POST['mail'];
	$tel = $_POST['tel'];
	$cp = $_POST['cp'];
    $ville = $_POST['ville'];
    $message = $_POST['message'];
    $subject = 'Un nouveau message';
	
	$html = "";
	$html .= "Name: " . htmlentities($nom, ENT_QUOTES, "UTF-8") . "<br>\n";
    $html .= "Prenom: " . htmlentities($prenom, ENT_QUOTES, "UTF-8") . "<br>\n";
	$html .= "Email: " . htmlentities($mail, ENT_QUOTES, "UTF-8") . "<br>\n";
    $html .= "Telephone: " . htmlentities($tel, ENT_QUOTES, "UTF-8") . "<br>\n";
    $html .= "CP: " . htmlentities($cp, ENT_QUOTES, "UTF-8") . "<br>\n";
    $html .= "Ville: " . htmlentities($ville, ENT_QUOTES, "UTF-8") . "<br>\n";
	$html .= "Message: " . htmlentities($message, ENT_QUOTES, "UTF-8") . "<br>\n";
	
	$headers = "MIME-Version: 1.0\r\nContent-type: text/html; charset=utf-8\r\n";
	$headers .= "From: " . $nom . "<". $mail .">\r\n";
	$headers .= "Reply-To: " .  $mail . "\r\n";
	
	$html = utf8_decode($html);
	
	mail($to, $subject, $html, $headers);
	
	if ($html)
		echo 'ok';
	else
		echo 'error';
	
} else {
	echo "error";	
}
?>
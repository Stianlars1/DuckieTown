<?php 

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$phone = $_POST['phone'];
$quantity = $_POST['quantity'];


$formcontent="From: $name | mail: $email | \n Phone: $phone | Quantity: $quantity \n Message: \n $message";
$recipient = "stian.larsen@mac.com";
$subject = "re: Buy interest from: $name";
$mailheader = "From: $email \r\n";

if (empty($name) && empty($email) && empty($message) && empty($phone) && empty($quantity)) {
    $alert = "Please fill out all fields";
    echo "<script type='text/javascript'>alert('$alert');</script>"; 
    return false;
}

mail($recipient, $subject, $formcontent, $mailheader);
header('Location: https://www.stianlarsen.com');

$alert = "Takk for din reservasjon! Din ordre vil bli fulgt opp snarest. Sjekk din mail for videre opplysninger.";
echo "<script type='text/javascript'>window.location = 'https://www.stianlarsen.com'; alert('$alert');</script>"; 


?>
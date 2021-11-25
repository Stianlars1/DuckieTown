<?php 

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent="From: $name | $email\n Message: \n $message";
$recipient = "stian.larsen@mac.com";
$subject = "re: SL-kontaktskjema from: $name";
$mailheader = "From: $email \r\n";

if (empty($name) && empty($email) && empty($message)) {
    $alert = "Please fill out all fields";
    echo "<script type='text/javascript'>alert('$alert');</script>"; 
    return false;
}

mail($recipient, $subject, $formcontent, $mailheader);
header('Location: https://www.stianlarsen.com/index.html');

$alert = "Takk for meldingen din! Svarer i løpet av 1-3 virkedager.";
echo "<script type='text/javascript'>window.location = 'https://www.stianlarsen.com/index.htm'; alert('$alert');</script>"; 


?>

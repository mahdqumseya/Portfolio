<?php
if($_POST){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['msg'];

//send email
    mail("mahd18@meet.mit.edu", "This is an email from:" .$email, $message);
}
?>
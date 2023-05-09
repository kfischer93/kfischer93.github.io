<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "kafi7166@colorado.edu";
    $subject = "New Message from Your Website";
    $headers = "From: " . $email . "\r\n" .
               "Reply-To: " . $email . "\r\n" .
               "Content-type: text/html; charset=UTF-8" . "\r\n";

    $body = "You have received a new message from your website contact form.<br><br>";
    $body .= "<strong>Name:</strong> " . $name . "<br>";
    $body .= "<strong>Email:</strong> " . $email . "<br>";
    $body .= "<strong>Message:</strong><br>" . nl2br($message);

    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send the message!";
    }
}
?>
<?php
// ست کردن هدر برای ارسال داده به صورت json
header('Content-Type: application/json');
$data = [
    "title" => "Welcome to the Index Page",
    "description" => "This is data fetched from a PHP backend."
];
echo json_encode($data);
?>

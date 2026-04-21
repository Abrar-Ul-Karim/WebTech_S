<?php
session_start();

$username = $_POST['username'];
$password = $_POST['password'];

if ($username == "admin" && $password == "1234") {

    $_SESSION['user'] = $username; 

    header("Location: dashboard.php");
    exit();

} else {
    echo "Invalid Username or Password";
}
?>


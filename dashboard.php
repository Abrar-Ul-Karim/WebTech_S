<?php
session_start();

if (!isset($_SESSION['user_name'])) {
    header("Location: login.php");
    exit();
}

$name = $_SESSION['user_name'];
$last_login = isset($_COOKIE['last_login']) ? $_COOKIE['last_login'] : "First login!";
?>

<h2>Welcome, <?php echo $name; ?> 🎉</h2>

<p>Last Login Time: <?php echo $last_login; ?></p>

<a href="logout.php">Logout</a>

<?php
$servername = "db";
$username = "root";
$password = "rootpassword";
$database = "test_db";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Veritabanına bağlanılamadı: " . $conn->connect_error);
} else {
    echo "<h1>PHP & MySQL Docker Uygulaması 🚀</h1>";
    echo "<p>MySQL bağlantısı başarılı!</p>";
}

$conn->close();
?>

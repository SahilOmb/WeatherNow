<?php
// Database configuration
$servername = "localhost";
$username = "root";
$password = "zxcvbnm$15092003";
$dbname = "users";



// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT id, username , email FROM userdata";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    echo "id: " . $row["id"]. " - Name: " . $row["username"]. " -email" . $row["email"]. "<br>";
  }
} else {
  echo "0 results";
}
$conn->close();
?>
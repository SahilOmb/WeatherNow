<?php
$db_server = "localhost";
$db_user = "root";
$db_password = "zxcvbnm$15092003";
$db_name = "users";
$conn = mysqli_connect($db_server, $db_user, $db_password, $db_name);

if ($conn) {
    echo "You are connected, enjoy ;) <br>";
} else {
    echo "Could not connect<br>";
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WeatherNow</title>
    <style>
           body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            background-image: url(pics/isometric-online-payments-background_52683-1099.avif);
        background-size: cover; /* Ensures the image covers the entire page */
                background-position: center; /* Centers the image */
                background-attachment: fixed; 
            margin: 0;
            padding: 0;
        }

        .container {
            text-align: center;
        }

        .card-container {
            width: 360px;
            background: linear-gradient(135deg,rgb(59, 60, 62),rgb(0, 0, 0));
            color: white;
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
            position: relative;
        }

        h2 {
            text-align: center;
            font-size: 20px;
            margin-bottom: 20px;
        }

        /* Card Chip Styling */
        .chip {
            width: 50px;
            height: 35px;
            background: gold;
            border-radius: 5px;
            position: absolute;
            top: 20px;
            left: 20px;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
        }

        /* Card Number Styling */
        .cardnum-container {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
        }
        .expiry-cvc {
            display: flex;
            justify-content: space-between;
        }

        .expiry-cvc input {
            width: 48%;
        }

        /* Add some visual space between labels and inputs */
        label {
            display: block;
            text-align: left;
            font-size: 14px;
            color: #fff;
            margin-top: 10px;
        }

        .button {
            background: #ffcc00;
            color: #333;
            font-size: 16px;
            font-weight: bold;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            padding: 15px;
            transition: 0.3s;
        }

        .button:hover {
            background: #e6b800;
        }

        /* Styling for card number input */
        .cardnum {
            letter-spacing: 5px;
        }

        /* Align fields inside the form */
        .form-fields {
            margin-top: 20px;
        }

    </style>
</head>
<body>

<div class="container">
    <div class="card-container">
        <div class="chip"></div>
        <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="post">
            <h2>Card Payment</h2>

            <label for="cardnum">Card Number</label>
            <input type="text" name="cardnum" maxlength="16" placeholder="1234 5678 9012 3456" required>

            <label for="username">Cardholder Name</label>
            <input type="text" name="username" placeholder="John Doe" required>

            <div class="expiry-cvc">
                <div>
                    <label for="expiry">Expiry Date</label>
                    <input type="text" name="expiry" maxlength="5" placeholder="MM/YY" required>
                </div>
                <div>
                    <label for="cvv">CVV</label>
                    <input type="password" name="password" maxlength="3" placeholder="123" required>
                </div>
            </div>

            <input type="submit" class="button" name="submit" value="Pay">
        </form>
    </div>
</div>

</body>
</html>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $cardnum = filter_input(INPUT_POST, "cardnum", FILTER_SANITIZE_SPECIAL_CHARS);
    $username = filter_input(INPUT_POST, "username", FILTER_SANITIZE_SPECIAL_CHARS);
    $password = filter_input(INPUT_POST, "password", FILTER_SANITIZE_SPECIAL_CHARS);

    // Validate input
    if (empty($cardnum)) {
        echo "Please enter a card number.";
    } elseif (empty($username)) {
        echo "Please enter a cardholder name.";
    } elseif (empty($password)) {
        echo "Please enter a CVV.";
    } else {
        // Use prepared statements to avoid SQL injection
        $stmt = mysqli_prepare($conn, "INSERT INTO payinfo (cardnum, username, password) VALUES (?, ?, ?)");
        mysqli_stmt_bind_param($stmt, "sss", $cardnum, $username, $password);

        if (mysqli_stmt_execute($stmt)) {
            echo "You registered successfully!";
        } else {
            echo "Error: " . mysqli_error($conn);
        }

        mysqli_stmt_close($stmt);
    }
}

mysqli_close($conn);

// Redirect to another HTML page (after a short delay to allow success message to be shown)
header("Main.html");
exit;
?>

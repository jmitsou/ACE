<?php
include_once("connect.php");

if (isset($_POST['action']) && $_POST['action'] == "check") {
	$email = mysql_real_escape_string(strip_tags($_POST['email']));
	$username = mysql_real_escape_string(strip_tags($_POST['username']));
	
	if (strpos($email, "@") !== false) {
		$check_email = explode("@", $email);
		if (strpos($check_email[1], ".") === false) {
			echo 3;
			exit();
		}
	} else {
		echo 3;
		exit();
	}
	$email_query = mysql_query("SELECT id FROM members WHERE email='$email' LIMIT 1");
	if (mysql_num_rows($email_query) == 1) {
		// Email already exists
		echo 1;
		exit();
	} else {
		$username_query = mysql_query("SELECT username FROM members WHERE username='$username' LIMIT 1");
		if (mysql_num_rows($username_query) == 1) {
			// Username already exists
			echo 2;
			exit();
		} else {
			// Everything is fine to use.
			echo 0;
			exit();
		}
	}
}
if (isset($_POST['action']) && $_POST['action'] == "register") {
	$firstname = mysql_real_escape_string(strip_tags($_POST['firstname']));
	$lastname = mysql_real_escape_string(strip_tags($_POST['lastname']));
	$email = mysql_real_escape_string(strip_tags($_POST['email']));
	$username = mysql_real_escape_string(strip_tags($_POST['username']));
	$password = mysql_real_escape_string(strip_tags($_POST['password']));
	
	$activation_code = md5($username.$password);
	
	$reg_query = mysql_query("INSERT INTO members (firstname, lastname, email, username, password, activation_code) VALUES ('".ucfirst(strtolower($firstname))."', '".ucfirst(strtolower($lastname))."', '$email', '$username', '".md5($password)."', '$activation_code')");
	if ($reg_query) {
		// Successfully registered and can create users folders and send activation email
		$new_userid = mysql_insert_id();
		
		// Create new user folder
		mkdir("../users/$new_userid", 0755);
		// Create new user images folder
		mkdir("../users/$new_userid/images", 0755);
		// Create new user media folder
		mkdir("../users/$new_userid/media", 0755);
		
		$to = $email;
		$from = "support@acecertificate.com";
		$subject = "Activate your Account";

		$message = "<h3>Welcome to the site ".ucfirst(strtolower($firstname))."!</h3>
		<p>To complete your account registration, you must activate your account. Click on the link below or paste it into the URL to activate your account.</p>
		<p><a href='http://dev.acecertificate.com/activation.php?id=$new_userid&activate=$activation_code'>http://dev.acecertificate.com/activation.php?id=$new_userid&activate=$activation_code</a></p>
		<p>Once your account has been activated, you may log in at anytime using the information you supplied below:<br />
		<strong>Username: </strong>$username<br />
		<strong>Password: </strong>$password</p>
		<p>Thank you for registering and see you on the site!</p>";

		$headers = 'MIME-Version: 1.0' . "\r\n";
		$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
		$headers .= "From: $from\r\nReply-To: $from";
		mail($to, $subject, $message, $headers);
		
		echo 1;
		exit();
	} else {
		// Registration failed
		echo 0;
		exit();
	}
}
?>
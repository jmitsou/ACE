<?php
require_once('init.php');
// page properties that are used by header.php to use within this page

$login_error = "";
$username = "";
$password = "";

if (isset($_GET['login'])) {
	include_once("scripts/connect.php");
	
	$username = strip_tags(mysql_real_escape_string($_POST['username']));
	$password = strip_tags(mysql_real_escape_string($_POST['password']));
	
	$sql = mysql_query("SELECT email, username, password FROM members WHERE username='".$username."' AND password='".md5($password)."' AND activated='1' LIMIT 1");
	
	if (mysql_num_rows($sql) == 1) {
		$row = mysql_fetch_assoc($sql);
		$_SESSION['email'] = $row['email'];
		$_SESSION['username'] = $row['username'];
		$_SESSION['password'] = $row['password'];
		
		header("Location: mycourse.php");
		exit();
	} else {
		$login_error = "Invalid Login...";
	}
}
?>

<?php
require_once('init.php');
// page properties that are used by header.php to use within this page
$page_title = 'Login';

?>

<?php include 'course_header.php'; ?>

	<main>
		<div id="links" class="row">
			<div id="navigation" class="col s12">
				<a href="login.php" class="btn">Login</a> |  
				<a href="registration.php" class="btn">Register</a>
			</div>
		</div>

		<div id="form" align="center">
			<h3>Login Below</h3><br />
			<form action="?login" method="post">
				<p>Username: <input type="text" name="username" value="" /></p>
				<p>Password: <input type="password" name="password" value="" /></p>
				<p><?php if (isset($login_error) && $login_error != "") { echo "<font color='#ff0000' style='margin-right: 10px;'>".$login_error."</font>"; }  ?><input type="submit" value="Submit Credentials" name="submit_login" /></p>
			</form>
		</div>
	</main>	

<?php include 'course_footer.php'; ?>
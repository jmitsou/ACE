<?php
require_once ("scripts/connect.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
  	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"/>
  	<title>Login</title>
  	<!--[if lt IE 9]>
	<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->

  <!-- CSS  -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
  <link href="css/materialize.css" type="text/css" rel="stylesheet" media="screen,projection"/>
  <link href="css/style.css" type="text/css" rel="stylesheet" media="screen,projection"/>
</head>
<body>
<header>
	<nav class="teal darken-1" role="navigation">
    <div class="nav-wrapper container"><a id="logo-container" href="#" class="brand-logo"><img src="img/new-logo.png" alt="" /></a>
      <ul class="right hide-on-med-and-down">
        	<li><a href="index.html">Home</a></li>
			<li><a href="cert.html">Certification</a></li>
		    <li><a href="con_ed.html">Continuing Education</a></li>
		    <li><a href="about.html">About</a></li>
		    <li><a href="news.html">News</a></li>
		    <li><a href="support.html">Support</a></li>
		    <a href="login.php" class=" mdi-communication-vpn-key left btn" style="color: gold;" class="fixed-action-btn" style="right: 24px;"> Login </a>
      </ul>

      <ul id="nav-mobile" class="side-nav">
        	<li><a href="index.html">Home</a></li>
			<li><a href="cert.html">Certification</a></li>
		    <li><a href="con_ed.html">Continuing Education</a></li>
		    <li><a href="about.html">About</a></li>
		    <li><a href="news.html">News</a></li>
		    <li><a href="support.html">Support</a></li>
		    <a href="login.php" class=" mdi-communication-vpn-key btn" class="fixed-action-btn" style="right: 23px;"> Login </a>
      </ul>
      <a href="#" data-activates="nav-mobile" class="button-collapse"><i class="mdi-navigation-menu"></i></a>
    </div>
  </nav>
</header>
<main>
<br />
<div id="links" class="row">
	<div id="navigation" class="col s12">
		<a href="login.php" class="btn">Login</a> |  
		<a href="registration.php" class="btn">Register</a>
	</div>
</div>
<div class="row" id="form">
	<div class="col s12 m6 l6">
		<h3 style="text-align: center;">Register Your Account Below</h3><br />
		<table id="registration">
			<tr><td>First Name: </td><td><input type="text" size="30" name="firstname" id="firstname" /></td></tr>
			<tr><td>Last Name: </td><td><input type="text" size="30"name="lastname" id="lastname" /></td></tr>
			<tr><td>Email Address: </td><td><input type="text" size="30" name="email" id="email" /></td></tr>
			<tr><td>Verify Email: </td><td><input type="text" size="30" name="verifyemail" id="verifyemail" /></td></tr>
			<tr><td>Username: </td><td><input type="text" size="30" maxlength="15" name="username" id="username" /></td></tr>
			<tr><td>Password: </td><td><input type="password" size="30" name="password" id="password" /></td></tr>
			<tr><td colspan="2" align="right"><span id="reg_span" style="padding-right: 10px;"></span><button name="reg_submit" id="reg_submit" />Register Your Account</button></td></tr>
		</table>
	</div>
	<div class="col s12 m6 l6" id="message">
		<div align="center" class="hidden" id="reg_success"><h3>Congratulations!</h3><br /><p style="margin-left: auto;">Your account has been successfully registered. An email has been sent to the account you specified during registration to finish activating your account.</p><p>You must activate your account before you can log in.</p></div>
		<div align="center" class="hidden" id="reg_failed"><h3>Sorry!</h3><br /><p style="margin-left: auto;">Something has went wrong during the registration process. Please try again.</p></div>
		<div style="clear: both;"></div>
	</div>
</div>
</main>	

<?php include 'course_footer.php'; ?>
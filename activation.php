<?php
$status = "";

if (isset($_GET['id'], $_GET['activate']) && $_GET['id'] != "" && $_GET['activate'] != "") {
	include_once("scripts/connect.php");
	
	// Make sure you filter your GET variables
	$id = $_GET['id'];
	$activate = $_GET['activate'];
	
	$sql = mysql_query("SELECT id FROM members WHERE id='$id' AND activation_code='$activate' LIMIT 1");
	if (mysql_num_rows($sql) == 1) {
		$sql2 = mysql_query("UPDATE members SET activated='1', date_activated=now() WHERE id='$id' AND activation_code='$activate' LIMIT 1");
		if ($sql2) {
			$status = "Your account has been successfully activated.";
		} else {
			$status = "I'm sorry but there was a problem activating your account.";
		}
	} else {
		$status = "I'm sorry but there was a problem activating your account.";
	}
	
} else {
	$status = "I'm sorry but there was a problem activating your account.";
}
?>
<!DOCTYPE HTML> 
<html lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
  	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"/>
  	<title>Site Activation</title>
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

<h3>Account Activation</h3><br />
<p><?php echo $status; ?></p>

<script>

setTimeout(function () {
   window.location.href= 'http://dev.acecertificate.com/index.html'; // the redirect goes here

},10000); // 5 seconds

</script>

</main>	
	<footer id="footer" class="page-footer teal darken-1">
       <div class="container ">
             <a class="grey-text text-lighten-3" href="affiliate.html">ACE Affilates</a> |
             <a class="grey-text text-lighten-3" href="terms.html">Terms and Conditions</a> |
             <a class="grey-text text-lighten-3" href="news.html">News</a> | 
             <a class="grey-text text-lighten-3" href="support.html">Support</a>          
          </div>
<!-- footer link ends-->
       <div class="footer-copyright">
            <div class="container">
            © 2015 Created by <a href="http://acecertificate.com">Academy For Credit Education</a>            </div>
          </div>
<!-- copyright ends-->
    </footer>
<!--footer ends-->
	  
	<script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
	<script src="js/jquery-2.1.4.min.js" type="text/javascript"></script>
	<script src="js/materialize.min.js" type="text/javascript"></script>
	<script src="js/main.js"></script>		
</body>
</html>
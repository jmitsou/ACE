<?php
require_once('init.php');
?>

<?php
require_once ("scripts/connect.php");
?>

<!DOCTYPE HTML5>
<html lang="en">
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
  	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"/>
	<!--<title>Unit 1: From Credit Cards to Credit Counseling</title>-->
	<title><?php echo $page_title; ?></title>
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
			    <div class="nav-wrapper container fixed"><a id="logo-container" href="#" class="brand-logo"><img src="img/new-logo.png" alt="" /></a>
			      <ul class="right hide-on-med-and-down">
			        	<li><a href="index.html">Home</a></li>
			      		<li><a href="cert.html">Certification</a></li>
			      	    <li><a href="con_ed.html">Continuing Education</a></li>
			      	    <li><a href="about.html">About</a></li>
			      	    <li><a href="news.html">News</a></li>
			      	    <li><a href="support.html">Support</a></li>
			      	   <?php
			      	   if (isset($_SESSION['email'])) {
			      	   	echo '<a href="?logout" class=" mdi-communication-vpn-key left btn" style="color: gold;"> Logout </a>';
			      	   }
			      	   	
			      	   ?>
			      </ul>
			      <ul id="nav-mobile" class="side-nav">
			        	<li><a href="index.html">Home</a></li>
			      		<li><a href="cert.html">Certification</a></li>
			      	    <li><a href="con_ed.html">Continuing Education</a></li>
			      	    <li><a href="about.html">About</a></li>
			      	    <li><a href="news.html">News</a></li>
			      	    <li><a href="support.html">Support</a></li>
			      	    <?php
			      	    if (isset($_SESSION['email'])) {
			      	    	echo '<a href="?logout" class=" mdi-communication-vpn-key left btn" style="color: gold;"> Logout </a>';
			      	    }
			      	    	
			      	    ?>
			      </ul>
			      <a href="#" data-activates="nav-mobile" class="button-collapse"><i class="mdi-navigation-menu"></i></a>
			      <a href="#" data-activates="slide-out" class="button-collapse right"><i class="mdi-navigation-menu"></i></a>
			    </div>
		  	</nav>
		</header>
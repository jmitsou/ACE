<!DOCTYPE HTML5>
<html lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"/>
	<title>Certification Renewal</title>
	
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


	<h3 class="center"> Certification Renewal Form</h3>
	<form method="post" action="cert-form.php" oninput="total.value=parseInt(ceus.value)"></form>
	<div class="row" id="page">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <input id="con_name" type="text" class="validate">
          <label for="con_name">Counselor Name</label>
        </div>
        <div class="input-field col s6">
          <input id="cert" type="text" class="validate">
          <label for="cert">Certificate Number</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s6">
          <input id="address1" type="text" class="validate">
          <label for="address1">Address Line 1</label>
        </div>
        <div class="input-field col s6">
          <input id="address2" type="text" class="validate">
          <label for="address2">Address Line 2</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s6">
          <input id="city" type="text" class="validate">
          <label for="city">City/Town</label>
        </div>
        <div class="input-field col s6">
          <input id="state" type="text" class="validate">
          <label for="state">State</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s6">
          <input id="city" type="text" class="validate">
          <label for="city">Zip Code</label>
        </div>
        <div class="input-field col s6">
          <input id="phone" type="tel" class="validate">
          <label for="phone">Phone</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="email" type="email" class="validate">
          <label for="email">Email</label>
        </div>
      </div>
      <p> Please list all continuing education completed during current certification</p>
      <div class="row">
        <div class="input-field col s4">
          <input id="ctitle" type="text" class="validate">
          <label for="ctitle">Course Title</label>
        </div>
        <div class="input-field col s4">
          <input id="datec" class="datepicker" type="date" class="validate">
          <label for="datec">Date Completed</label>
        </div>
        <div class="input-field col s4">
          <input id="ceus" type="number" class="validate">
          <label for="ceus">Number of CEUs</label>
        </div>
        <div class="input-field col s4 right">
          <input id="total" type="number" class="validate">
          <label for="total">Total</label>
        </div>
      </div>
      <p>* Please note: You must report a total of 16 CEUs to qualify for certification approval.</p>
      <div class="input-field col s4 right">
         <button class="btn waves-effect waves-light" type="submit" name="action">Submit
    	 <i class="mdi-content-send right"></i>
  		 </button>
      </div>
    </form>
  </div>
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
            © 2015 Created by <a href="http://acecertificate.com">Academy For Credit Education</a> 
            </div>
          </div>
<!-- copyright ends-->


  <!--  Scripts-->
    <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
	<script src="js/jquery-2.1.4.min.js" type="text/javascript"></script>
	<script src="js/materialize.min.js" type="text/javascript"></script>
	<script src="js/main.js"></script>
</body>
</html>
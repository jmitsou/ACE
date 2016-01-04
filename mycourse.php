<?php
require_once('init.php');
// page properties that are used by header.php to use within this page
$page_title = 'My Course';

?>

<?php include 'course_header.php'; ?>

<main>
    <div id="top" class="container"> 
        <div class="row">
	    	<div class="col s12 m6">
	            <ul class="collection with-header" id="bor">
			        <img  class="responsive-img" src="img/KeytoSuccessCover.jpg" alt="" style="width: 100%;"/>
			        <li class="collection-header teal darken-1 white-text">KEYS TO SUCCESS: Credit Counselor Certification</li>
			    </ul>
			    <div id="otest"> 
					<a href="practice_test.html" id="left" class="btn">Practice Test</a>
					<a href="schedule-test.html" id="right" class="btn">Schedule My Test</a>
				</div>
	    	</div>
	    	<div class="col s12 m6">
	    		<ul class="collection with-header" id="bor">
			        <li class="collection-header teal darken-1 white-text">Description:</li>
				    <p><b><u>Objectives are to deliver the knowledge, skills and abilities to:</u></b></p>
				    
					<p><b>Promote financial literacy.</b> Participants become resources of timely information about money management, credit use, and options for resolving debt.</p>
					
					<p><b>Implement financial action plans.</b> Participants will understand the “how-to” of the personal financial tasks essential to financial well-being.</p>
					
					<p><b>Provide support and resources.</b> Participants learn essential counseling techniques and give referrals when necessary to ensure client success.</p>
			    </ul>
			</div>
    	</div>
    </div>
    
    	<div class="container">
	         <div class="row">
		        <div class="col s12 m12">    
		        	<div class="collection">
			            <a href="overview.php" class="collection-item">Course Overview</a>
			            <a href="mod1.php" class="collection-item">Module I: Setting Standards</a>
			            <a href="mod2.php" class="collection-item">Module II: Communicating with Clients</a>
			            <a href="mod3.php" class="collection-item">Module III: Taking Control of Finances</a>
			            <a href="mod4.php" class="collection-item">Module IV: Demystifying Credit</a>
			            <a href="mod5.php" class="collection-item">Module V: Understanding & Dealing With Debt</a>
			            <a href="glossary.html" class="collection-item">Glossary</a>
			         </div>
		        </div>
	        </div>
        </div>
     
</main>
    
<?php include 'course_footer.php'; ?>
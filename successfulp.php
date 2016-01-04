<?php
require_once('init.php');
// page properties that are used by header.php to use within this page
$page_title = 'Thank You';

?>

<?php include 'course_header.php'; ?>

<main>

	<h2>You have Successfully Purchase your CEUs.</h2><h2>Thank you.</h2>


 <script>

setTimeout(function () {
   window.location.href= 'http://dev.acecertificate.com/index.html'; // the redirect goes here

},5000); // 5 seconds

</script>

</main>


<?php include 'course_footer.php'; ?>

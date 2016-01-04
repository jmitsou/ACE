<?php
require_once('init.php');
// page properties that are used by header.php to use within this page
$page_title = 'Thank You For your purchase';

?>

<?php include 'course_header.php'; ?>

<main>

	<h2>You have Successfully Purchase your Test Voucher. Good Luck</h2>


 <script>

setTimeout(function () {
   window.location.href= 'http://dev.acecertificate.com/mycourse.php'; // the redirect goes here

},5000); // 5 seconds

</script>

</main>


<?php include 'course_footer.php'; ?>
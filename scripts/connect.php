<?php

$hostname="mysql.acecertificate.com";
$username="jmitsou";
$password="@izenM01";
$db="ace_users";

$connect = mysql_connect($hostname, $username, $password);

if ($connect) {
	// Successfully connection to the database
	$select = mysql_select_db($db);
	if ($select) {
		// Connected to the database
		//echo "Connected successfully.";
	} else {
		//echo "Could not connect with the information supplied.";
	}
} else {
	//echo "Could not connect with the supplied username and password.";
}

?>
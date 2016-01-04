<?php

$hostname="mysql.acecertificate.com";
$database="ace_users";
$username="jmitsou";
$password="@izenM01";

$link = mysql_connect($hostname, $username, $password);
if (!$link) {
die('Connection failed xxxx: ' . mysql_error());
}

$db_selected = mysql_select_db($database, $link);
if (!$db_selected) {
    die ('Can\'t select database: ' . mysql_error());
}

?>
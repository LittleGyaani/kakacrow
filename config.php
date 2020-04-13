<?php

//Main Configuration File by Little Gyaani

//Global Declarations
$base_URI = "";
$DBName = "";
$DBUsername = "";
$DBPassword = "";

//Server Selection
if($_SERVER['HTTP_HOST'] === 'localhost'){//Local Server

  //Values of DB Connection and URL of APP when Server is Local
  $base_URI = "http://localhost/forum/home";
  $DBname = "forum_DB";
  $DBUsername = "root";
  $DBPassword = "";

}else {

  //Values of DB Connection and URL of APP when Server is Production
  $base_URI = "https://mirrordesign.tech/demo/kakacrow/";
  $DBName = "mirro309_forum_DB";
  $DBUsername = "mirro309_forumadmin";
  $DBPassword = "admin#2020";

}

return array (
  'debug' => false,
  'database' => 
  array (
    'driver' => 'mysql',
    'host' => 'localhost',
    'port' => 3306,
    'database' => $DBName,
    'username' => $DBUsername,
    'password' => $DBPassword,
    'charset' => 'utf8mb4',
    'collation' => 'utf8mb4_unicode_ci',
    'prefix' => '',
    'strict' => false,
    'engine' => 'InnoDB',
    'prefix_indexes' => true,
  ),
  'url' => $base_URI,
  'paths' => 
  array (
    'api' => 'api',
    'admin' => 'admin',
  ),
);
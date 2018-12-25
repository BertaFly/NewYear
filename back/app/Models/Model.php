<?php
namespace App\Models;
class Model {
    public function connect()
    {
		$connectstr_dbhost = '';
		$connectstr_dbname = '';
		$connectstr_dbusername = '';
		$connectstr_dbpassword = '';
		
		foreach ($_SERVER as $key => $value) {
		    if (strpos($key, "MYSQLCONNSTR_localdb") !== 0) {
		        continue;
		    }
		    
		    $connectstr_dbhost = preg_replace("/^.*Data Source=(.+?);.*$/", "\\1", $value);
		    $connectstr_dbname = preg_replace("/^.*Database=(.+?);.*$/", "\\1", $value);
		    $connectstr_dbusername = preg_replace("/^.*User Id=(.+?);.*$/", "\\1", $value);
		    $connectstr_dbpassword = preg_replace("/^.*Password=(.+?)$/", "\\1", $value);
		}
		
        $dsn = 'mysql:host=' . $connectstr_dbhost . ';dbname=myDb';
		$usr = $connectstr_dbusername;
		$pwd = $connectstr_dbpassword;
		$pdo = new \Slim\PDO\Database($dsn, $usr, $pwd);
		return $pdo;
    }
}
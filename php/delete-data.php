<?php
include "config.php";

$id=$_GET["id"];
$sql="DELETE  FROM students WHERE id='{$id}'";
$run_sql=mysqli_query($conn,$sql);
if($run_sql){
    echo json_encode(["success"=>true,"message"=>"Student Delete Succcessfully"]);
}else{
    echo json_encode(["success"=>false,"message"=>"Server Problem"]);
}


?>
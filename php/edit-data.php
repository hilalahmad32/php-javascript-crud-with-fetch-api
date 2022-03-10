<?php

include "config.php";
if(isset($_GET["id"])){
    $id=$_GET["id"];
$sql="SELECT * FROM students WHERE id='{$id}'";
$run_sql=mysqli_query($conn,$sql);
$output=[];
if(mysqli_num_rows($run_sql) > 0){
    while($row=mysqli_fetch_assoc($run_sql)){
        $output[]=$row;
    }
}else{
    $output["empty"]="empty";
}
echo json_encode($output);
}
?>
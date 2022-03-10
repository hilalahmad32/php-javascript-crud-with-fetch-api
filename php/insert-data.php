<?php

include 'config.php';

// if(isset($_POST["name"]) || isset($_POST["age"]) || isset($_POST["country"])){
    $input=file_get_contents("php://input");
    $decode=json_decode($input,true);

    $name=$decode["name"];
    $age=$decode["age"];
    $country=$decode["country"];

    $sql="INSERT INTO students (std_name,std_age,std_country) VALUES ('{$name}',{$age},'{$country}')";
    $run_sql=mysqli_query($conn,$sql);
    if($run_sql){
        echo json_encode(["success"=>true,"message"=>"Student Add Succcessfully"]);
    }else{
        echo json_encode(["success"=>false,"message"=>"Server Problem"]);
    }
// }

?>
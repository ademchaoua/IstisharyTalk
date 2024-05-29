<?php

ob_start();

if(isset($_SESSION['user'])){
    header('location: /chat');
}else{
    header('location: ./account/login');
}

?>
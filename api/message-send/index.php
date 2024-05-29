<?php

$msg = $_POST['message'];

$users = json_decode(file_get_contents('http://localhost/IstisharyTalk/database/users.json'), true);

$loginSuccess = false;


if(isset($_COOKIE['email'])){
    $email = $_COOKIE['email'];

    foreach ($users['users'] as $user) {
        if ($user['email'] === $email) {
            $loginSuccess = true;
            break;
        }
    }
}else{
    echo "user not login!";
}

if($loginSuccess){
    $messages = json_decode(file_get_contents('http://localhost/IstisharyTalk/database/msgs.json'));
    $messages[] = [
        'user' => $email,
        'message' => $msg
    ];

    file_put_contents(dirname(__DIR__, 2).'/database/msgs.json',json_encode($messages, JSON_PRETTY_PRINT));

    echo "message been send!";
}

?>
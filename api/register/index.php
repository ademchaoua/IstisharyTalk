<?php

$email = $_POST['email'];
$pass = $_POST['pass'];
$first = $_POST['first'];
$last = $_POST['last'];

$users = json_decode(file_get_contents('http://localhost/IstisharyTalk/database/users.json'), true);

$loginSuccess = false;

foreach ($users['users'] as $user) {
    if ($user['email'] === $email) {
        $loginSuccess = true;
        break;
    }
}

if (empty($email) or empty($pass) or empty($first) or empty($last)) {

    echo "Pls enter all info (Email, firstName, lastName, Password)!";

} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    
    echo "Invalid email format!";

} elseif ($loginSuccess) {

    echo "User already register!";

} else {

    $info = [
        $email => [
            "firstName" => $first,
            "lastName" => $last,
        ]
    ];
    $user = [
        'email' => $email,
        'password' => $pass,
    ];
    $users['users'][] = $user;

    file_put_contents(dirname(__DIR__, 2).'/database/userInfo.json',json_encode($info, JSON_PRETTY_PRINT));
    file_put_contents(dirname(__DIR__, 2).'/database/users.json',json_encode($users, JSON_PRETTY_PRINT));
    
    echo "User been register!";


}

?>
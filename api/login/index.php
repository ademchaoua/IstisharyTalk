<?php

$email = $_POST['email'];
$pass = $_POST['pass'];

$users = json_decode(file_get_contents('http://localhost/IstisharyTalk/database/users.json'), true);

$loginSuccess = false;

foreach ($users['users'] as $user) {
    if ($user['email'] === $email && $user['password'] === $pass) {
        $loginSuccess = true;
        break;
    }
}

if ($loginSuccess) {

    echo "Login successful!";

} else {

    echo "Invalid email or password.";

}

?>
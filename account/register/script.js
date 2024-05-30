document.addEventListener('DOMContentLoaded',function() {
    let btn = document.getElementById('btn');
    btn.onclick = () => {
        let email = document.getElementById('email').value;
        let first = document.getElementById('first').value;
        let last = document.getElementById('last').value;
        let pass = document.getElementById('pass').value;

        let register = new XMLHttpRequest();

        register.onload = () => {
            let response = register.responseText;
            if(response == 'User already register!'){
                showMessage(`User already register!`, 'rgba(255, 0, 0, 0.163)');
            } else if (response == 'Pls enter all info (Email, firstName, lastName, Password)!'){
                showMessage(`Pls enter all info (Email, firstName, lastName, Password)!`, 'rgba(255, 0, 0, 0.163)');
            } else if (response == 'Invalid email format!'){
                showMessage(`Invalid email format!`, 'rgba(255, 0, 0, 0.163)');
            } else if (response == 'User been register!'){
                showMessage(`User been register!`, 'rgb(0, 150, 0)');
                document.cookie = `email=${encodeURIComponent(email)}; path=/`;
                setTimeout(() => location.assign("http://localhost/IstisharyTalk/chat/"), 1000);
            }else {
                showMessage(`[unknow error] Try again after 5min !`, 'rgba(255, 0, 0, 0.163)');
            }
        }
        register.open("POST", "http://localhost/IstisharyTalk/api/register/");
        register.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        register.send(`email=${encodeURIComponent(email)}&pass=${encodeURIComponent(pass)}&first=${encodeURIComponent(first)}&last=${encodeURIComponent(last)}`);
    }

    function showMessage(message, bgColor) {
        let msgElement = document.getElementById("msgError");
        msgElement.innerHTML = message;
        msgElement.style = `background: ${bgColor}; display: block;`;
    }
});
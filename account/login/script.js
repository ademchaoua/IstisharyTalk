document.addEventListener("DOMContentLoaded", function() {
    let btn = document.getElementById("btn");

    btn.onclick = () => {
        let email = document.getElementById("email").value;
        let pass = document.getElementById("pass").value;

        if (!email || !pass) {
            showMessage("Please enter both email and password.", 'rgb(82, 0, 0)');
            return;
        }

        let login = new XMLHttpRequest();
        login.onload = () => {
            let response = login.responseText;
            if (response === 'Invalid email or password.') {
                showMessage(response, 'rgb(82, 0, 0)');
            } else if (response === 'Login successful!') {
                showMessage(response, 'rgb(0, 150, 0)');
                document.cookie = `email=${encodeURIComponent(email)}; path=/`;
                setTimeout(() => location.assign("http://localhost/IstisharyTalk/chat/"), 1000);
            } else {
                showMessage("Unexpected response from server.", 'rgb(82, 0, 0)');
            }
        };

        login.onerror = () => {
            showMessage("Network error. Please try again.", 'rgb(82, 0, 0)');
        };

        login.open("POST", "http://localhost/IstisharyTalk/api/login");
        login.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        login.send(`email=${encodeURIComponent(email)}&pass=${encodeURIComponent(pass)}`);
    };

    function showMessage(message, bgColor) {
        let msgElement = document.getElementById("msg");
        msgElement.innerHTML = message;
        msgElement.style = `background: ${bgColor}; display: block;`;
    }
});

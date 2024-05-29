document.addEventListener(
    'DOMContentLoaded',
    function() 
    {
        let btn = document.getElementById('btn');

        document.getElementById('btn').onclick = () => {
            let msg = document.getElementById('msg').value;

            if (!msg) {
                showMessage('Pls enter message.', 'rgba(255, 0, 0, 0.163)');
                return;
            }else{
                let login = new XMLHttpRequest();
                login.onload = () => {
                    let response = login.responseText;
                    if(response == 'message been send!'){
                        deleteMessage();
                    }else if(response == 'user not login!'){
                        showMessage('you need login or register first', 'rgba(255, 0, 0, 0.163)');
                    }else{
                        showMessage('There is error pls refresh page and try again', 'rgba(255, 0, 0, 0.163)');
                    }
                }
                login.open("POST", "http://localhost/IstisharyTalk/api/message-send/");
                login.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                login.send(`message=${encodeURIComponent(msg)}`);
            }
        }

        function showMessage(message, bgColor) {
            let msgElement = document.getElementById("msgError");
            msgElement.innerHTML = message;
            msgElement.style = `background: ${bgColor}; display: block;`;
        }

        function deleteMessage(){
            let msgElement = document.getElementById("msgError");
            msgElement.style = 'display: none;';
        }
    }
);
const msgs = document.getElementById('msgs');

        function fetchMessages() {
            fetch('http://localhost/IstisharyTalk/database/msgs.json')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(messages => {
                    console.log(messages); // Log the entire messages array to inspect its structure

                    // Limit the messages to the last 10
                    const limitedMessages = messages.slice(-10);

                    // Clear the current messages
                    msgs.innerHTML = '';

                    // Assuming messages is an array of message objects
                    limitedMessages.forEach(message => {
                        console.log(message); // Log each message object to see its structure
                        const user = message.user; // Access the sender property
                        const msg = message.message; // Access the text property
                        if(user == 'Duck1'){
                            msgs.innerHTML += `
                            <p style="color: red;">
                                Sender: ${user} <br>
                                <span style="color: white;">Message: ${msg}</span>
                            </p>`;
                        }else if(user == 'Duck2'){
                            msgs.innerHTML += `
                            <p style="color: tomato;">
                                Sender: ${user} <br>
                                <span style="color: white;">Message: ${msg}</span>
                            </p>`;
                        }
                    });
                })
                .catch(error => {
                    console.error('There was a problem with the fetch operation:', error);
                });
        }

        // Fetch messages initially
        fetchMessages();

        // Set interval to fetch messages every 1 second (1000 milliseconds)
        setInterval(fetchMessages, 1000);
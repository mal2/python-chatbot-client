var socket = new WebSocket('ws://cbapi.up.railway.app/ws');   

    socket.onmessage = function(msg) {
        const message = document.createElement('li');
        const list = document.getElementById('chat');
        message.textContent = msg.data;
        message.classList.add('message', 'left');
        list.appendChild(message);
        window.scrollTo(0, document.body.scrollHeight);
    };

    function sendMessage(event) {
        event.preventDefault()
        const list = document.getElementById('chat');
        const input = document.getElementById("input");
        const message = document.createElement('li');
        message.textContent = input.value;
        message.classList.add('message', 'right');
        list.appendChild(message);
        socket.send(input.value)
        input.value = ''
        window.scrollTo(0, document.body.scrollHeight);
    }

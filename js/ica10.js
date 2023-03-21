
const btn = document.querySelector('button');
btn.addEventListener('click', () => displayMessage('Top o the mornin to ya!','chat'));

    function displayMessage(msgText,msgType) {
        const html = document.querySelector('html');

        const panel = document.createElement('div');
        panel.setAttribute('class','msgBox');
        html.appendChild(panel);

        const closeBtn = document.createElement('button');
        closeBtn.textContent = 'x';
        panel.appendChild(closeBtn);

        const msg = document.createElement('p');
        msg.textContent = msgText;
        panel.appendChild(msg);

        closeBtn.onclick = function() {
            panel.parentNode.removeChild(panel);
  }

            if (msgType === 'warning') {
                msg.style.backgroundImage = 'url(/js/4-2-rainbow-png-pic.png)';
                panel.style.backgroundColor = 'red';
}           else if (msgType === 'chat') {
                msg.style.backgroundImage = 'url(/js/4-2-rainbow-png-pic.png)';
                panel.style.backgroundColor = 'dark green';
}           else {
                msg.style.paddingLeft = '20px';
}

    }




function encodeAndDecodeMessages() {
    const textAreas = document.querySelectorAll('textarea');
    const encodeAndSendTextArea = textAreas[0];
    const decodeAndReadTextArea = textAreas[1];

    const buttons = document.querySelectorAll('button');
    const encodeBtn = buttons[0];
    const decodeBtn = buttons[1];

    encodeBtn.addEventListener('click', encodeMsg);
    decodeBtn.addEventListener('click', decodeRead);

    function encodeMsg (event) {
        let text = encodeAndSendTextArea.value;
        let msgToSend = '';
        
        for (let letter of text) {
            let char = letter.charCodeAt(0);
            let newChar = String.fromCharCode(char + 1);
            msgToSend += newChar;
        }
        decodeAndReadTextArea.value = msgToSend;
        encodeAndSendTextArea.value = '';
    }

    function decodeRead (event) {
        let text = decodeAndReadTextArea.value;
        let msgToRead = '';

        for (let letter of text) {
            let char = letter.charCodeAt(0);
            let newLetter = String.fromCharCode(char - 1);
            msgToRead += newLetter;
        }
        decodeAndReadTextArea.value = msgToRead;
    }
}
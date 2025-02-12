function sendMessage() {
    const receiverId = prompt("Enter recipient's User ID:");
    const message = document.getElementById('messageInput').value;
    const senderId = firebase.auth().currentUser.uid;

    if (receiverId && message.trim()) {
        const chatId = senderId < receiverId ? senderId + "_" + receiverId : receiverId + "_" + senderId;

        firebase.database().ref('chats/' + chatId).push({
            sender: senderId,
            receiver: receiverId,
            message: message,
            timestamp: Date.now()
        });

        document.getElementById('messageInput').value = '';
    }
}

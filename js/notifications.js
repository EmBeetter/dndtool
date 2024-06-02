window.playNotificationSound = function () {
    var audio = new Audio('audio/notification.mp3');
    audio.play();
};
function requestNotificationPermission() {
    if (Notification.permission !== 'granted') {
        Notification.requestPermission();
    }
}

function showNotification(notification) {
    if (Notification.permission === 'granted') {
        new Notification(notification.title, {
            body: notification.message,
            icon: notification.icon
        });
    }
}
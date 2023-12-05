import Echo from "laravel-echo";
import pusherJs from "pusher-js";

const pusher = new pusherJs('abc', {
    wsHost: window.location.hostname,
    wsPort: 6001,
    cluster: 'eu',
    forceTLS: false,
    disableStats: true,
    enabledTransports: ['ws', 'wss'],
});

const echo = new Echo({
    broadcaster: 'pusher',
    key: 'abc',
    cluster: 'eu',
    encrypted: false,
    wsHost: window.location.hostname,
    wsPort: 6001,
    forceTLS: false,
    authEndpoint: 'http://localhost/broadcasting/auth',
    auth: {
        headers: {
            Authorization: `2|8xwSSfmaTMttjYKkfbKXkPO7kcPv5ZZaSbH3R0dM12a5ffbe`,
            Accept: 'application/json'
        }
    }
});

async function GetItemsWS() {
    try {
        echo.channel('websocket').listen('WebSocketEvent', (e) => {
            // Parse the JSON string in the "data" property
            const eventData = JSON.parse(e.data);
        
            // Access the nested "data" property and parse its value
            const messageData = JSON.parse(eventData.data.data);
        
            // Access the "message" property
            const alertMessage = messageData.message;

            console.log(eventData);
            console.log(messageData);
            console.log(alertMessage);
            
            alert(alertMessage);
        });
        console.log('Subscribed to channel via echo! and listening to event');

        return 'function finished';
    } catch (error) {
        console.error('Error subscribing to channel:', error);
        throw error; // Propagate the error further
    }
}

export { GetItemsWS };

// put this code under the try in the GetItemsWS function
        // pusher.subscribe('private-websockets-dashboard-connection');
        // echo.connect(); // Subscribe to the channel
        // console.log('Connected via echo!');

        // pusher.subscribe('parkingspots'); // Subscribe to the channel
        // console.log('Subscribed to channel via pusher!');

        // echo.join('parkingspots'); // Subscribe to the channel
        // console.log('Subscribed to channel via echo!');

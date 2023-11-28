import Echo from "laravel-echo";
import pusherJs from "pusher-js";

async function GetItemsWS() {
    const pusher = new pusherJs('83c5a5f367ed11bb2adf', {
        wsHost: window.location.hostname,
        wsPort: 6001,
        cluster: 'eu',
        forceTLS: false,
        disableStats: true,
        enabledTransports: ['ws', 'wss'],
    });
    
    const echo = new Echo({
        broadcaster: 'pusher',
        key: '83c5a5f367ed11bb2adf',
        cluster: 'eu',
        encrypted: false,
        wsHost: window.location.hostname,
        wsPort: 6001,
        forceTLS: false,
        authEndpoint: 'http://localhost/broadcasting/auth',
        auth: {
            headers: {
                Authorization: `1|c180y6bAUMa9qoeZ8o0SuXmmYrxwZxz78VpRhBjnca2cf514`,
                Accept: 'application/json'
            }
        }
    });

    try {
        echo.channel('parkingspots').listen('parkingspotUpdated', (e) => {
            console.log(e);
            alert(e?.message);
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

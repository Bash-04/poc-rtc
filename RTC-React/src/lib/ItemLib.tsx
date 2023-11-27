import Echo from "laravel-echo";
import pusherJs from "pusher-js";

async function GetItemsWS() {
    const pusher = new pusherJs('abc', {
        wsHost: 'localhost',
        wsPort: 6001,
        wssPort: 6001,
        cluster: 'mt1',
        forceTLS: true,
        authEndpoint: 'http://localhost/laravel-websockets/auth',
        disableStats: false,
        auth: {
            headers: {
                'X-CSRF-Token': "fajpewipfoiahjopwgha",
                'X-App-ID': 123
            }
        },
        enabledTransports: ['ws', 'wss']
    });

    const echo = new Echo({
        broadcaster: pusher,
        key: 'abc',
        cluster: 'mt1',
        encrypted: true,
        wsHost: window.location.hostname,
        wsPort: 6001,
    });

    try {
        pusher.subscribe('private-websockets-dashboard-connection');
        pusher.connect();
        if (pusher.connection.state === 'connected') {
            console.log('connected');
        } else {
            console.log('not connected');
        }
        // console.log('Connecting to channel...');
        // const channel = await echo.channel('private-websockets-dashboard-client-message'); // Use 'await' to wait for the promise to resolve
        // console.log('Connected to channel!');
        // console.log(channel);

        // console.log('Subscribing to channel...');
        // const sub = await echo.channel('client-message').subscribed(e => console.log(e)); // Use 'await' to wait for the promise to resolve
        // console.log(sub);
        // console.log('Subscribed to channel!');

        // echo.listen('.test', 'testing', (e) => {
        //     console.log(e);
        // });

        // console.log('Listening to channel...');
        // const listen = channel.listen('.testing', (e) => {
        //     console.log(e);
        // });
        // console.log(listen);
        // console.log('Listened to channel!');

        return 'function finished';
    } catch (error) {
        console.error('Error subscribing to channel:', error);
        throw error; // Propagate the error further
    }
}

export { GetItemsWS };

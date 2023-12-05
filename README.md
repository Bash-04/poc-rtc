# poc-rtc
Proof of Concept for Real-time Communication Protocols with Laravel as back-end

## Running the POC
### Web Sockets
1) Clone <a href="https://github.com/Bash-04/poc-rtc">this</a> repository to your local device
2) Open terminal
3) Run 'cd {project-location}\poc-rtc\RTC-Laravel'
4) Run 'docker-compose up --build -d'
5) Run 'cd .. && cd RTC-React'
6) Run 'npm run dev'
7) Open the browser and go to 'http://localhost:5174/'
8) Now open a second browser tab and go to 'http://localhost/test'
9) Open the first browser tab again and see the alert pop-up
10) WELL DONE! You've ran a websocket event with Laravel and React TS!

## POC
### <a href="./RTC-React/">React TS</a>
The Proof of Concept is shown by a react front-end application showing some fun functionalities with the RTC services. 

## Real-time Communication Protocols
Real-time Communication Protocol, also known as RTC.
### <a href="./RTC-laravel/">API Polling</a>
The easiest way of RTC. 
<br>
Every once in a while the client will sent a request to the server waiting on a response, in the hope that there will be some new data. 

### <a href="./RTC-laravel/">Server Sent Events</a>
A one way RTC connection. 
<br>
The client will start a connection by sending a request, as following the server will keep the connection open and send events when data is updated. In this protocol the client isn't able to send requests after the connection is opened.

### <a href="./RTC-laravel/">Web Sockets</a>
A bidirectional RTC connection.
<br>
With websockets the client opens a connection over which the client can make requests and the server will send responses. The responses received from the server don't have to be in chronological order. 

### WebRTC
This is a protocol of which no demonstration is created, the reason behind this is because this protocol is mostly used for chatting, voice calls and video calls via web applications. Which for this project is not needed.

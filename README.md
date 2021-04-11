# streamer
Clone the streamer project that includes: client, apis, rtmpserver.

Open client folder.

run `npm install`. 
run `npm start` (http://localhost:3000 to view it in a browser).

Open apis folder. 
run `npm install`.
run `npm start` (http://localhost:3001 to view it in the browser).
Refresh http://localhost:3000 page.

Open rtmpserver folder.
run `npm install`.
run `npm start` (will open http://localhost:8000 for streaming purposes).

Download OBS from https://obsproject.com
Install OBS.
From OBS:
Create a new scene and enter a name of the scene you want.
Create a new source -> disaplay capture -> ok -> select display you want to use -> ok
Create a new source -> audio input capture -> ok -> select device of recording audio -> ok

Settings -> stream
  stream type: custom streaming server
  url: rtmp://localhost/live
  stream key: enter your desired stream page and get the stream key from the url.
Press ok
To start streaming press on "start streaming".
After you are done streaming press "stop streaming".

Through the website go to the stream you chose and press play to view it.

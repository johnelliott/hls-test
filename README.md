Local wifi streaming audio for bike party

Problem 1: getting audio stream
iPhone + bluetooth 4.0
bluetooth dongle
raspberry pi
node bluetooth peripheral in headset mode
what's the data output from that? raw PCM?
if I can use a2dp then i get MPEG coming out
https://www.raspberrypi.org/forums/viewtopic.php?t=33943&p=347843
[TUTORIAL] RPi as Bluetooth A2DP Reciever: https://www.raspberrypi.org/forums/viewtopic.php?t=26685&p=457570

or...
radio server like shoutcst
icecast
syncing, crazyness

Problem 2: the server
some kind of server
clients
front-end: just an audio tag....

Problem 3: networking
but how does the wifi network work?
DNS
auto-capture cafe wifi thing
something like https://github.com/wifidog
need an intro to networking

Problem 4: bootstrapping installation
ansible
  bluez
  node app
  stream machine app
  wifi config


other notes:
http://superuser.com/questions/583251/current-item-in-vlc-media-player-using-command-line
http://stackoverflow.com/questions/16224808/is-there-a-good-radio-like-audio-streaming-solution-for-node-js

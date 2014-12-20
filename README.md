<h1>Arduino write from NodeJs program</h1>

Search.js is to find out which port is being used for the arduino

write.js is the write program to arduino using node-serialport library.

connect 2 LEDs in Arduino UNO at pin 13 and 11.

Upload the program blinkie.ino, which is in thwe blinkie folder.

Then run the search.js to find out which port is beling used for the arduino.

>> node search.js

Then you will get something like /dev/ttyACM0 in linux and COM3 in windows.

Then open up the write.js file and edit that at the portName variable and run the file

>> node write.js b

or

>> node write.js c

Because there is a variable i in the write.js which takes value while running from the terminal.
If it is a "b", then the LED at pin 13 will blink and if it is a "c", then the LED at pin 11 will blink.

Try it out <a href = "http://twitter.com/abraubhav">@abranubhav</a>.


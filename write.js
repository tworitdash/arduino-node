var i = process.argv[2];

var serialport = require('serialport'),// include the library
   SerialPort = serialport.SerialPort, // make a local instance of it
   // get port name from the command line:
   portName = "/dev/ttyACM1"
var myPort = new SerialPort(portName, {
   baudRate: 9600,
   // look for return and newline at the end of each data packet:
   parser: serialport.parsers.readline("\r\n")
 });
myPort.on('open', showPortOpen);
myPort.on('data', saveLatestData);
myPort.on('close', showPortClose);
myPort.on('error', showError);


function showPortOpen() {
   console.log('port open. Data rate: ' + myPort.options.baudRate);
   if(i == 'b'){ 
    myPort.write("b", function(err, results){
       // console.log('err' + err);
       // console.log('results' + results);
	console.log('b is written');

    });
   } 
   if(i == 'c'){
	myPort.write("c", function(err, results){
		console.log('c is written');
	});	
    }

}
 
function saveLatestData(data) {
   console.log(data);
}
 
function showPortClose() {
   console.log('port closed.');
}
 
function showError(error) {
   console.log('Serial port error: ' + error);
}




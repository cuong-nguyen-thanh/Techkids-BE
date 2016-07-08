var readline = require('readline');
var fs = require('fs');

module.exports = function(filename){
  var lineReader = readline.createInterface({
    input: fs.createReadStream(filename)
  });

  lineReader.on('line', function (line) {
    var arr = line.split(";");
    console.log("Ten: %s, Tuoi: %s, Hon nhan: %s", arr[0], arr[1], arr[2]);
  });
}

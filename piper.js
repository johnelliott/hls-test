var fs = require('fs');

var pipe = fs.createReadStream('./datpipe');

console.log('started ...');

pipe.on('data', function(data) {
  console.log('This data is:', data);
});

pipe.on('end', function(data) {
  console.log('This data is end');
});
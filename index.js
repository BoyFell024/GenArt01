// Import stylesheets
import './style.css';

// Import mergeImages library
import mergeImages from 'merge-images';


// Write code

  mergeImages(['/GA_Face1.png', '/GA_Ears1.png', '/GA_Nose1.png'])
  .then(b64 => document.querySelector('img').src = b64);

  var fs = require('fs');
  ar data = img.replace(/^data:image\/\w+;base64,/, "");
  var buf = new Buffer(data, 'base64');
  fs.writeFile('image.png', buf);




// Write Javascript code!
//const appDiv = document.getElementById('app');
// appDiv.innerHTML = newImage;
//appDiv.innerHTML = `<h1>JS Starter</h1>`;

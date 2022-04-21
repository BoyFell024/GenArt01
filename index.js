// Import stylesheets
import './style.css';

// Import mergeImages library
import mergeImages from 'merge-images';


// Write code

mergeImages(['/body.png', '/eyes.png', '/mouth.png'])
  .then(b64 => document.querySelector('img').src = b64);



// Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;



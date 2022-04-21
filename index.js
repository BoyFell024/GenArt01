// Import stylesheets
import './style.css';

// Import mergeImages library
import mergeImages from 'merge-images';

// Write code

//  mergeImages(['/GA_Face1.png', '/GA_Ears1.png', '/GA_Nose1.png'])
//  .then(b64 => document.querySelector('img').src = b64);

// Write Javascript code!
//const appDiv = document.getElementById('app');
// appDiv.innerHTML = newImage;
//appDiv.innerHTML = `<h1>JS Starter</h1>`;

// Import MergeImg library
import mergeImg from 'merge-img';

mergeImg(['GA_Face1.png', 'GA_Ears1.jpg']).then((img) => {
  // Save image as file
  img.write('out.png', () => console.log('done'));
});

appDiv.innerHTML = newImage;
appDiv.innerHTML = `<h1>Output new image as out.png</h1>`;

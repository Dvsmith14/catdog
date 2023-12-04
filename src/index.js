import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const cat_result = document.getElementById('cat_result');
const dog_result = document.getElementById('dog_result');
const cat_btn = document.getElementById('cat_btn');
const dog_btn = document.getElementById('dog_btn');

cat_btn.addEventListener('click', getRandomCat);
dog_btn.addEventListener('click', getRandomDog);

function getRandomCat() {
  fetch('https://api.thecatapi.com/v1/images/search')
    .then(res => res.json())
    .then(data => {
      cat_result.innerHTML = `<img src="${data[0].url}" alt="Random Cat"/>`;
    })
    .catch(error => console.error('Error fetching cat:', error));
}

function getRandomDog() {
  fetch('https://random.dog/woof.json')
    .then(res => res.json())
    .then(data => {
      if (data.url.includes('.mp4')) {
        getRandomDog();
      } else {
        dog_result.innerHTML = `<img src="${data.url}" alt="Random Dog"/>`;
      }
    })
    .catch(error => console.error('Error fetching dog:', error));
}


root.render(<React.StrictMode><App /></React.StrictMode>);

reportWebVitals();

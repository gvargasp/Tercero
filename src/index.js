require('dotenv').config();
const { mongoose } = require('./database');
const app = require('./App');

/*import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/
async function main() {
  app.listen(4000);
  console.log('server on port 4000');
}

main();

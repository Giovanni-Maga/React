import React from 'react';
import ReactDOM from 'react-dom/client';
import app from './main/App';
import registerServiceWorker from './registerServerceWorker';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

registerServiceWorker();
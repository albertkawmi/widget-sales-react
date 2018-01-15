import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './utils/registerServiceWorker';
import { config as environmentConfig } from 'dotenv'

// Variables specified in .env will be available in process.env
// NOTE: variables must be prefixed with REACT_APP_
environmentConfig()

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

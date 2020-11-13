import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import AuthContextProvider from './Context/auth-context';

ReactDOM.render(
    //now we can listen the context from everywhere in the application
    <AuthContextProvider>
        <App />
    </AuthContextProvider>, 
    document.getElementById('root')
);

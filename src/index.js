import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Winner from './Winner';
import NameForm from './NameForm/NameForm';
ReactDOM.render(
  <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/winner" component={Winner} />
      </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
// ReactDOM.render(<BrowserRouter>
//     <App />
//   </BrowserRouter>
// , document.getElementById('root'));

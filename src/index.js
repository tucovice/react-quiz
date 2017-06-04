import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home';
import Quiz from './components/quiz';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

// Root component
const app = document.getElementById('app');

let quizes = [
  <Quiz title="Advanced JS" key="1" id="1" category="Javascript" description="Advanced questions from javascript" />,
  <Quiz title="React" key="2" id="2" category="Javascript, ReactJS" description="Questions from ReactJS framework" />,
  <Quiz title="Advanced JS" key="3" id="3" category="Javascript" description="Advanced questions from javascript" />,
  <Quiz title="React" key="4" id="4" category="Javascript, ReactJS" description="Questions from ReactJS framework" />,
  <Quiz title="Angular" key="5" id="5" category="Javascript, AngularJS, Angular 1.x" description="Questions from AngularJS framework" />
];

ReactDOM.render(<Home className="home" list={quizes} />, app);
registerServiceWorker();

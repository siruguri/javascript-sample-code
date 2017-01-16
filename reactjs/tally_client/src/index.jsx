import React from 'react';
import ReactDOM from 'react-dom';
import MainApp from './components/MainApp';

require('./assets/style.scss');
const cts = ['Audi', 'Toyota'];

ReactDOM.render(
  <MainApp counts={cts} />,
  document.getElementById('app')
);

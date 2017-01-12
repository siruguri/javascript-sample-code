import React from 'react';
import ReactDOM from 'react-dom';
import MainApp from './components/MainApp';

const cts = ['Audi', 'Toyota'];

ReactDOM.render(
  <MainApp counts={cts} />,
  document.getElementById('app')
);

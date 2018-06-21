import 'babel-polyfill';
import ManInTheMirror from './src/ManInTheMirror';
import React from 'react';
import {render} from 'react-dom';

render(
  <ManInTheMirror/>,
  document.querySelector('.content')
);

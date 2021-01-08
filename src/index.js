import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import 'materialize-css';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// const onPageOnLoad = () => {
//   const btnFocused = document.querySelector("#btn-all");
//   btnFocused.focus();
//   window.removeEventListener('load', onPageOnLoad);
// }
// window.addEventListener('load', onPageOnLoad, { once: true });

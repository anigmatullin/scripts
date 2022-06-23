import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/js/bootstrap.esm.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';

import { Board } from './board';
import { Game } from './game';

  
  // ========================================
  
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);

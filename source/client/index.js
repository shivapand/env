import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'client/style/index.scss';
import _Route from './Route';

const viewerString = 'viewer';

document.body
  .appendChild(document.createElement('div'))
  .setAttribute('id', viewerString);

createRoot(document.getElementById(viewerString)).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<_Route />} />
    </Routes>
  </BrowserRouter>
);

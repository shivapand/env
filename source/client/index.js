import React from 'react';
import { createRoot } from 'react-dom/client';

import 'client/style/index.scss';

const viewerString = 'viewer';

document.body
  .appendChild(document.createElement('div'))
  .setAttribute('id', viewerString);

createRoot(document.getElementById(viewerString)).render(<div>MAHA</div>);

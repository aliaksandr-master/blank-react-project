'use strict';

import React from 'react';
import { render } from 'react-dom';

const App = () => (
    <div>Hello!</div>
);

render((<App/>),
    document.getElementById('react-root')
);

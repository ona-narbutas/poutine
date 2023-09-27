import React from 'react';
import { createRoot } from 'react-dom/client';
import { deflateRaw } from 'zlib';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(<h1>Hello world!</h1>);

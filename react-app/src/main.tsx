import * as ReactDOMClient from 'react-dom/client';

import App from './App.tsx';
import './index.css';

const root = ReactDOMClient.createRoot(document.getElementById('root')!);

root.render(<App />);

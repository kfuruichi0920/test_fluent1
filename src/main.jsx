import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FluentProvider } from '@fluentui/react-components';
import { myCustomTheme } from './fluentTheme';
import './index.css'
import App from './App.jsx'

const root = createRoot(document.getElementById('root'));

root.render(
  <FluentProvider theme={myCustomTheme}>
    <App />
  </FluentProvider>,
);

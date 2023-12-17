import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import inject from '@stylexjs/dev-runtime';

inject({
  classNamePrefix: 'x',
  dev: true,
  test: false,
  useRemForFontSize: false,
  runtimeInjection: false,
  styleResolution: 'application-order'
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<App />);

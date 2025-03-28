import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { HelmetProvider } from 'react-helmet-async';

import App from './App';
// ----------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HelmetProvider>
      <RecoilRoot>
          <App id="app" />
      </RecoilRoot>
  </HelmetProvider>
);

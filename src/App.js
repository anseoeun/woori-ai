
import { BrowserRouter } from 'react-router-dom';
import Router from './routes';
import StyleProvider from './style';

export default function App() {
  return (
    <StyleProvider>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Router />
      </BrowserRouter>
    </StyleProvider>
  );
}

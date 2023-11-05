import ReactDOM from 'react-dom/client';

import { Header } from './components/Header';
import { ProviderCharacters } from './context/ContextCharacters';
import { GlobalStyle } from './styles/globalStyle';
import { Home } from './templates/Home';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ProviderCharacters>
    <GlobalStyle />
    <Header />
    <Home />
  </ProviderCharacters>,
);

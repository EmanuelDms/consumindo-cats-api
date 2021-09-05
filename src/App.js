import React from 'react';
import { PaginationProvider } from './contexts/PaginationContext';
import Main from './pages/Main';

import GlobalStyle from './styles/global';

function App() {
  return (
    <PaginationProvider>
      <GlobalStyle />
      <Main />
    </PaginationProvider>
  );
}

export default App;

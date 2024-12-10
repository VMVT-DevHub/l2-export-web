import { DesignSystemProvider } from '@aplinkosministerija/design-system';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';
import App from './App';
import redux from './state/store';
import { GlobalStyle, theme } from './styles/index';

const isAppRoute = window.location.pathname.includes('/app');
if (!isAppRoute) {
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const { store, persistor } = redux;
const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <GlobalStyle theme={theme} />
          <DesignSystemProvider>
            <App />
          </DesignSystemProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </QueryClientProvider>,
);
}
import { RouterProvider } from 'react-router-dom';
import './locale/i18n';
import routes from './utils/routes';

function App() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      for (let registration of registrations) {
        registration.unregister();
      }
    });
  }
  
  return <RouterProvider router={routes} />
  ;
}

export default App;

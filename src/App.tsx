import { Route, RouterProvider } from 'react-router-dom';
import routes from './utils/routes';
import './locale/i18n';

function App() {
  return <RouterProvider router={routes} />;
}

export default App;

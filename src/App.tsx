import { RouterProvider } from 'react-router-dom';
import './locale/i18n';
import routes from './utils/routes';

function App() {
  return <RouterProvider router={routes} />;
}

export default App;

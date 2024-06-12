import { createBrowserRouter } from 'react-router-dom';
import CertificateCheck from '../pages/CertificateCheck';
import CertificateInfo from '../pages/CertificateInfo';

const router = createBrowserRouter([
  {
    path: '/',
    element: <CertificateCheck />,
  },
  {
    path: '/cert-info',
    element: <CertificateInfo />,
  },
]);

export default router;

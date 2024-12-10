import { createBrowserRouter } from 'react-router-dom';
import CertificateCheck from '../pages/CertificateCheck';
import CertificateInfo from '../pages/CertificateInfo';
import LandingPage from '../pages/LandingPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/app',
    element: null,
  },
  {
    path: '/cert-info',
    element: <CertificateInfo />,
  },
  {
	path: '/sertifikatai',
	element: <CertificateCheck />,
  },
  {
	path: '/sertifikatai/cert-info',
	element: <CertificateInfo />,
  },
]);

export default router;

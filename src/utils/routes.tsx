import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';
import CertificateCheck from '../pages/CertificateCheck';
import CertificateInfo from '../pages/CertificateInfo';
import LandingPage from '../pages/LandingPage';
import i18n from '../locale/i18n';
import { useEffect } from 'react';

const getBrowserLanguage = () => {
  const browserLang = navigator.language.split('-')[0]; 
  const supportedLanguages = Object.keys(i18n.options.resources || {});
  
  return supportedLanguages.includes(browserLang) 
    ? browserLang 
    : 'lt';
};

const initialLanguage = getBrowserLanguage();
i18n.changeLanguage(initialLanguage);

const LanguageWrapper = ({ params }: { params: { lang: string } }) => {
  useEffect(() => {
    if (params.lang && i18n.language !== params.lang) {
      i18n.changeLanguage(params.lang);
    }
  }, [params.lang]);

  return <Outlet />;
};

const createLocalizedRoutes = () => {
  const supportedLanguages = Object.keys(i18n.options.resources || {});
  
  return supportedLanguages.map(lang => ({
    path: `/${lang}`,
    element: <LanguageWrapper params={{ lang }} />,
    children: [
      {
        path: '',
        element: <LandingPage />,
      },
      {
        path: 'sertifikatai/landing',
        element: <LandingPage />,
      },
      {
        path: 'cert-info',
        element: <CertificateInfo />,
      },
      {
        path: 'sertifikatai',
        element: <CertificateCheck />,
      },
      {
        path: 'sertifikatai/cert-info',
        element: <CertificateInfo />,
      },
    ],
  }));
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to={`/${i18n.language}`} replace />,
  },
  ...createLocalizedRoutes(),
]);

export default router;

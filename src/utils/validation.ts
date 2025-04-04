import * as Yup from 'yup';
import i18n from '../locale/i18n';

export const validateCheckCertForm = () => {
  return Yup.object().shape({
    countryCode: Yup.string().min(1).required('validation.required'),
    certificateNumber: Yup.string().min(1).required('validation.required'),
    blankNumber: Yup.string().min(1).required('validation.required'),
  });
};

export const validateCheckCertFormExport = () => {
  return Yup.object().shape({
    year: Yup.number().moreThan(1900, 'validation.year').lessThan(3000, 'validation.year').required('validation.required'),
    certificateNumber: Yup.string().min(1).required('validation.required'),
    blankNumber: Yup.string().min(1).required('validation.required'),
  });
};
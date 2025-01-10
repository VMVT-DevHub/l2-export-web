import { AxiosError } from 'axios';
import { useMutation, useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { Certificate, CertificateFile } from '../types';
import api, { GetCertificate } from './api';
import i18n from '../locale/i18n';

export const useCheckCertificate = () => {
  const navigate = useNavigate();
  return useMutation<Certificate, AxiosError, GetCertificate>({
    mutationFn: (props: GetCertificate) => {
      return api.getCertificate(props);
    },
    onSuccess: async (data) => {
      navigate(`/${i18n.language}/cert-info`, {
        state: data,
      });
    },
  });
};

export const useCertificateFiles = (id: string) => {
  return useQuery<CertificateFile[], AxiosError>({
    queryKey: ['certificates/files', id],
    enabled: Boolean(id),
    queryFn: () => {
      return api.getCertificateFiles({ id });
    },
  });
};

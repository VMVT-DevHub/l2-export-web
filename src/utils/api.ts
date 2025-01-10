import Axios, { AxiosInstance, AxiosResponse } from 'axios';
import { Certificate, CertificateFile } from '../types';

interface Get {
  resource: string;
  id?: string | number;
  params?: any;
}

export interface GetCertificate extends Omit<Get, 'resource'> {
  params: {
    certificateNumber: string;
    grantedNumber: string;
    year?: string;
    countryCode?: string;
  };
}

class Api {
  private AuthApiAxios: AxiosInstance;
  private readonly proxy: string = '/api';

  constructor() {
    this.AuthApiAxios = Axios.create();

    this.AuthApiAxios.interceptors.request.use(
      (config) => {
        config.url = this.proxy + config.url;

        return config;
      },
      (error) => {
        Promise.reject(error);
      },
    );
  }

  errorWrapper = async (endpoint: () => Promise<AxiosResponse<any, any>>) => {
    const res = await endpoint();

    return res.data;
  };

  get = async ({ resource, id, params }: Get) => {
    const config = {
      params,
    };

    return this.errorWrapper(() =>
      this.AuthApiAxios.get(`/${resource}${id ? `/${id}` : ''}`, config),
    );
  };

  getCertificate = async (props: GetCertificate): Promise<Certificate> => {
    return this.get({
      resource: `certificates/search`,
      ...props,
    });
  };

  getCertificateFiles = async ({ id }: { id: string }): Promise<CertificateFile[]> => {
    return this.get({
      resource: `certificates/files`,
      id,
    });
  };
}

const api = new Api();

export default api;

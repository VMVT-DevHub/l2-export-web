export interface CommonFields {
  id: number;
  createdAt: string;
  updatedAt: string;
}

export interface Loads extends CommonFields {
  id: number;
  code: string;
  name: string;
  amount: number;
  manufacturer: string;
  packagesNumber: number;
  originCountryCertificate: string;
  certificate: number;
}
export interface Certificate extends CommonFields {
  id: number;
  certificateNumber: string;
  status: string;
  date: string;
  exportCountry: string;
  exportCompany: string;
  importCompany: string;
  importCountry: string;
  sealNumber: string;
  territorialNumber: string;
  notes: string;
  transportNumber: string;
  grantedNumber: number;
  departurePVP: string;
  signedBy: string;
  loads: Array<Loads>;
}

export interface CertificateFile {
  name: string;
  size: number;
  url: string;
}

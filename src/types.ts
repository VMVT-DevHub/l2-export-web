export interface CommonFields {
  id: number | string;
  createdAt: string;
  updatedAt: string;
}

interface Lookup extends CommonFields {
  group: string;
  number: number;
  title: string;
  description: string;
}

export interface Load extends CommonFields {
  certificate: Certificate;
  sealNumber: string;
  type: Lookup;
  number: string;
  details: string;
  createDate: Date;
  modifyDate: Date;
  modifyUser: string;
  modifyUserName: string;
  isDeleted: boolean;
}

export interface Certificate extends CommonFields {
  id: number;
  certificateNumber: string;
  exportCountry: string;
  exporter: {
    id: number;
    name: string;
  } | null;
  importCountry: {
    id: number;
    name: string;
  } | null;
  importPost: {
    id: number;
    name: string;
  } | null;
  importReceiver: string;
  status: string;
  issueDate: string;
  blankNumber: string;
  post: {
    id: number;
    name: string;
  } | null;
  postOther: string;
  issueEmail: string;
  issueName: string;
  issueDepartment: string;
  fileCount: number;
  transporters: Array<{
    id: number;
    type: {
      id: number | null;
      title: string | null;
    } | null;
    typeOther: string | null;
    number: string;
  }> | null;
  loads: Array<{
    id: number;
    type: {
      id: number | null;
      title: string | null;
    } | null;
    typeOther: string | null;
    number: string;
  }> | null;
  products: Array<{
    id: number;
    productName: string;
    productLevel1: string;
    productLevel1Name: string;
    productLevel2: string;
    productLevel2Name: string;
    productLevel3: string;
    productLevel3Name: string;
    productLevel4: string;
    productLevel4Name: string;
    manufacturer: { id: number; name: string };
    unit: {
      id: number;
      title: string;
      description: string;
    };
    quantity: number;
    packaging: string;
  }> | null;
}

export interface CertificateFile {
  name: string;
  size: number;
  url: string;
}

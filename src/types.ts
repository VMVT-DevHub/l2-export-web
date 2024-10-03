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
  transportType: Lookup;
  transportNumber: string;
  details: string;
  createDate: Date;
  modifyDate: Date;
  modifyUser: string;
  modifyUserName: string;
  isDeleted: boolean;
}

interface Risk extends CommonFields {
  id: number;
  name: string;
  min: number;
  max: number;
  check: number;
}

interface Country extends CommonFields {
  id: string;
  name: string;
  iso: string;
}

interface ActivityLocation extends CommonFields {
  id: number;
  internalId: string;
  companyCode: number;
  type: string;
  name: string;
  isExport: boolean;
  isManufacturer: boolean;
  country: Country;
  address: string;
  registrationNumber: string;
  confirmationNumber: string;
  swift: string;
  details: string;
  isActive: boolean;
  search: string;
  createDate: Date;
  modifyDate: Date;
  modifyUser: string;
  modifyUserName: string;
  groupCode: string;
}

interface Post extends CommonFields {
  id: number;
  name: string;
  code: string;
  abbreviation: string;
  country: Country;
  address: string;
  active: boolean;
}

export interface Certificate extends CommonFields {
  id: number;
  certificateNumber: string;
  exporter: ActivityLocation;
  importCountry: Country;
  status: string;
  createDate: Date;
  date: Date;
  departureDate: Date;
  notes: string;
  risk: Risk;
  post: Post;
  issueEmail: string;
  issueName: string;
  createName: string;
  createUserName: string;
  modifyUser: string;
  modifyUserName: string;
  isDeleted: boolean;
  modifyDepartment: string;
  issueDepartment: string;
  isModified: boolean;
  blank: string;
  modifyDate: Date;
  riskValue: number;
  isChecking: boolean;
  riskModify: number;
  riskReason: string;
  loads: Load[];
  products: Product[];
}

interface Product {
  certificate: Certificate;
  load: Load;
  manufacturer: ActivityLocation;
  country: Country;
  unit: string;
  amount: number;
  details: string;
  originCertificate: string;
  risk: number;
  prodL1: string;
  prodL1Name: string;
  prodL2: string;
  prodL2Name: string;
  prodL3: string;
  prodL3Name: string;
  prodL4: string;
  prodL4Name: string;
  createDate: Date;
  modifyDate: Date;
  modifyUser: string;
  modifyUserName: string;
  name: string;
  isDeleted: boolean;
  lastLayer: number;
}

export interface CertificateFile {
  name: string;
  size: number;
  url: string;
}

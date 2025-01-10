import { Table } from '@aplinkosministerija/design-system';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled, { useTheme } from 'styled-components';
import AttachedFileBadge from '../components/AttachedFileBadge';
import GoBackButton from '../components/GoBackButton';
import Loader from '../components/Loader';
import { Padding } from '../components/other/Layout';
import { Heading, Label, Paragraph } from '../components/other/Text';
import StatusText, { Status } from '../components/StatusText';
import { useTranslation } from 'react-i18next';
import TransitInfoLine from '../components/TransitInfoLine';
import Default from '../layouts/Default';
import { device } from '../styles';
import { Certificate, Load } from '../types';
import { simpleDate } from '../utils/date';
import { useCertificateFiles } from '../utils/hooks';

interface LoadInfo {
  name: string;
  info: Array<{ sealNumber: string; transportNumber: string }>;
}

const CertificateInfo = () => {
  const location = useLocation();
  const theme = useTheme();
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  useEffect(() => {
    if (!location.state) {
      navigate('/');
      return;
    }
  }, [location.state, navigate]);
  
  const cert = location.state as Certificate;
  
  if (!cert) {
    return null;
  }

  const { isLoading, data: files } = useCertificateFiles(cert.certificateNumber);

  const mappedLoads: LoadInfo[] = cert?.loads
    ? Object.values(
        cert.loads.reduce((acc, { transportType, sealNumber, transportNumber }: Load) => {
          acc[transportType.id] ||= { name: transportType.title, info: [] };
          acc[transportType.id].info.push({ sealNumber, transportNumber });
          return acc;
        }, {}),
      )
    : [];

  const mappedProducts = cert?.products
    ? cert?.products.map((product) => {
        const code = product?.prodL4 || product?.prodL3 || product?.prodL2 || product?.prodL1;
        return {
          name: product?.name,
          code,
          manufacturer: product?.manufacturer?.name,
          amount: `${product?.amount} ${product?.unit}`,
          packagesAmount: 0,
          country: product?.originCertificate,
        };
      })
    : [];

  return (
    <Default innerWidth={device.mobileXL}>
      <Container>
        <GoBackButton />
        <Card>
          <HeadingRow>
            <Heading>Sertifikatas {cert?.certificateNumber}</Heading>
            {cert?.status && (
              <StatusText
                text={cert?.status}
                status={cert?.status === 'Negaliojantis' ? Status.RED : Status.GREEN}
              />
            )}
          </HeadingRow>
          <Date>{cert?.date && simpleDate(cert?.date)}</Date>
          <TransitInfoLine
            importCompany={'-'}
            importCountry={cert?.importCountry?.name}
            exportCompany={cert?.exporter?.name}
            exportCountry={cert?.exporter?.country?.name}
          />
          <GreyCard>
            <CellRow>
              <Cell>
                <Label>Sertifikatą pasirašo</Label>
                <Paragraph>{cert?.issueName}</Paragraph>
              </Cell>
              <Cell>
                <Label>Teritorinė VMVT</Label>
                <Paragraph>{cert?.issueDepartment}</Paragraph>
              </Cell>
              <Cell>
                <Label>Išvykimo PVP</Label>
                <Paragraph>{cert?.post?.name}</Paragraph>
              </Cell>
              <Cell>
                <Label>Suteiktas Nr.</Label>
                <Paragraph>{cert?.blank}</Paragraph>
              </Cell>
            </CellRow>

            <Padding $vertical={10} />
            <Cell>
              <Label>Pastaba</Label>
              <Paragraph>{cert?.notes}</Paragraph>
            </Cell>
          </GreyCard>
          <AttachmentsRow>
            <Title>Kroviniai:</Title>
            {mappedLoads?.length === 0 && <Title>nėra</Title>}
            <LoadContainer>
              {mappedLoads.map((load) => {
                return (
                  <LoadColumn>
                    <Title>{load?.name || '-'}</Title>
                    {load?.info.map((item) => (
                      <LoadRow>
                        <LoadInnerRow>
                          <LoadLabel>Nr.:</LoadLabel>
                          <LoadValue>{item?.transportNumber || '-'}</LoadValue>
                        </LoadInnerRow>
                        <LoadInnerRow>
                          <LoadLabel>VMVT plomba:</LoadLabel>
                          <LoadValue>{item?.sealNumber || '-'}</LoadValue>
                        </LoadInnerRow>
                      </LoadRow>
                    ))}
                  </LoadColumn>
                );
              })}
            </LoadContainer>
          </AttachmentsRow>
          <AttachmentsRow>
            <Title>Prikabinti dokumentai:</Title>
            {!isLoading && files?.length === 0 && <Title>nėra</Title>}
            {isLoading && <Loader color={theme.colors.primary} />}
            {files && files.map((file) => <AttachedFileBadge text={file.name} url={file.url} />)}
          </AttachmentsRow>
          <Line />
          <FlexStart>
            <Title>Krovinio duomenys:</Title>
            {!mappedProducts.length && <Title>nėra</Title>}
          </FlexStart>
          {!!mappedProducts.length && (
            <Table
              columns={{
                code: {
                  label: 'Kodas',
                  show: true,
                },
                name: {
                  label: 'Pavadinimas',
                  show: true,
                },
                amount: {
                  label: 'Kiekis',
                  show: true,
                },
                packagesAmount: {
                  label: 'Pakuočių skaičius',
                  show: true,
                },
                manufacturer: {
                  label: 'Gamintojas',
                  show: true,
                },
                country: {
                  label: 'Kilmės šalies sertifikatas',
                  show: true,
                },
              }}
              data={{
                data: mappedProducts,
              }}
              notFoundInfo={{}}
            />
          )}
        </Card>
      </Container>
    </Default>
  );
};

const LoadValue = styled.div`
  font-size: 1.6rem;
  font-weight: 400;
  color: #192f4e;
`;

const LoadLabel = styled.div`
  font-size: 1.6rem;
  font-weight: 400;
  color: #56606c;
`;

const LoadInnerRow = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  align-items: center;
`;

const LoadRow = styled.div`
  display: flex;
  gap: 43px;
  flex-wrap: wrap;
  align-items: center;
`;
const LoadColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const LoadContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 3px 4px 0px #00000014;
  background-color: white;
  border-radius: 16px;
  padding: 32px;
  gap: 10px;
`;

const GreyCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 16px 24px;
  background-color: ${({ theme }) => theme.colors.grey};
`;

const Line = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.border};
`;

const CellRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  gap: 8px;
`;

const AttachmentsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 0;
  flex-direction: row;
  gap: 8px;
`;

const Cell = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

const Date = styled(Label)`
  display: flex;
  align-items: flex-start;
`;

const HeadingRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

const Title = styled(Label)`
  color: ${({ theme }) => theme.colors.text.heading};
  font-weight: 700;
  text-align: left;
  min-width: 150px;
`;

const FlexStart = styled.div`
  display: flex;
  gap: 8px;
`;

export default CertificateInfo;

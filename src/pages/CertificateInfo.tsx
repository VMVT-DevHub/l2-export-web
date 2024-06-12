import React from 'react';
import Default from '../layouts/Default';
import styled, { useTheme } from 'styled-components';
import Icon from '../components/other/Icons';
import { useTranslation } from 'react-i18next';
import GoBackButton from '../components/GoBackButton';
import StatusText, { Status } from '../components/StatusText';
import { Heading, Label, Paragraph } from '../components/other/Text';
import TransitInfoLine from '../components/TransitInfoLine';
import { device } from '../styles';
import { Padding } from '../components/other/Layout';
import AttachedFileBadge from '../components/AttachedFileBadge';
import Table from '../components/table/Table';
import { useLocation } from 'react-router-dom';
import { Certificate } from '../types';
import { simpleDate } from '../utils/date';
import { useCertificateFiles } from '../utils/hooks';
import Loader from '../components/Loader';

const CertificateInfo = () => {
  const location = useLocation();
  const cert = location.state as Certificate;
  const theme = useTheme();

  const { isLoading, data: files } = useCertificateFiles(cert.id);

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
            importCompany={cert?.importCompany}
            importCountry={cert?.importCountry}
            exportCompany={cert?.exportCompany}
            exportCountry={cert?.exportCountry}
          />
          <GreyCard>
            <CellRow>
              <Cell>
                <Label>Sertifikatą pasirašo</Label>
                <Paragraph>{cert?.signedBy}</Paragraph>
              </Cell>
              <Cell>
                <Label>Teritorinė VMVT</Label>
                <Paragraph>{cert?.territorialNumber}</Paragraph>
              </Cell>
              <Cell>
                <Label>Išvykimo PVP</Label>
                <Paragraph>{cert?.departurePVP}</Paragraph>
              </Cell>
              <Cell>
                <Label>Suteiktas Nr.</Label>
                <Paragraph>{cert?.grantedNumber}</Paragraph>
              </Cell>
              <Cell>
                <Label>VMVT plomba</Label>
                <Paragraph>{cert?.sealNumber}</Paragraph>
              </Cell>
              <Cell>
                <Label>Transporto Nr.</Label>
                <Paragraph>{cert?.transportNumber}</Paragraph>
              </Cell>
            </CellRow>
            <Padding $vertical={10} />
            <Cell>
              <Label>Pastaba</Label>
              <Paragraph>{cert?.notes}</Paragraph>
            </Cell>
          </GreyCard>
          <AttachmentsRow>
            <Title>Prikabinti dokumentai:</Title>
            {!isLoading && files?.length === 0 && <Title>nėra</Title>}
            {isLoading && <Loader color={theme.colors.primary} />}
            {files && files.map((file) => <AttachedFileBadge text={file.name} url={file.url} />)}
          </AttachmentsRow>
          <Line />
          <FlexStart>
            <Title>Krovinio duomenys:</Title>
            {!cert?.loads && <Title>nėra</Title>}
          </FlexStart>
          {cert?.loads && (
            <Table
              columns={{
                amount: {
                  label: 'amount',
                  show: true,
                },
                certificate: {
                  label: 'certificate',
                  show: true,
                },
                code: {
                  label: 'code',
                  show: true,
                },
                manufacturer: {
                  label: 'manufacturer',
                  show: true,
                },
                name: {
                  label: 'name',
                  show: true,
                },
                originCountryCertificate: {
                  label: 'originCountryCertificate',
                  show: true,
                },
                packagesNumber: {
                  label: 'packagesNumber',
                  show: true,
                },
              }}
              data={{
                data: cert?.loads ?? [],
              }}
              notFoundInfo={{
                text: 'Not found',
                url: '',
                urlText: 'not found',
              }}
            />
          )}
        </Card>
      </Container>
    </Default>
  );
};

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
  align-items: center;
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
`;

const FlexStart = styled.div`
  display: flex;
  gap: 8px;
`;

export default CertificateInfo;

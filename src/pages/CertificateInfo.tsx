import { Table } from '@aplinkosministerija/design-system';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import styled, { useTheme } from 'styled-components';
import AttachedFileBadge from '../components/AttachedFileBadge';
import GoBackButton from '../components/GoBackButton';
import Loader from '../components/Loader';
import { Heading, Label, Paragraph } from '../components/other/Text';
import StatusText, { Status } from '../components/StatusText';
import TransitInfoLine from '../components/TransitInfoLine';
import Default from '../layouts/Default';
import { device } from '../styles';
import { Certificate } from '../types';
import { useCertificateFiles } from '../utils/hooks';
import { format } from 'date-fns';

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
  const { isLoading, data: files } = useCertificateFiles(cert.certificateNumber);

  if (!cert) {
    return null;
  }

  const mappedProducts = cert?.products
    ? cert?.products.map((product) => {
        const code =
          product?.productLevel4 ||
          product?.productLevel3 ||
          product?.productLevel2 ||
          product?.productLevel1;
        return {
          name: <LongText>{product?.productName || '-'}</LongText>,
          code,
          manufacturer: <LongText>{product?.manufacturer?.name}</LongText>,
          quantity: product.quantity_bruto
            ? `${product.quantity} neto / ${product.quantity_bruto} bruto`
            : product.quantity,
          unit: product.unit?.title,
          packagesAmount: 0,
        };
      })
    : [];

  return (
    <Default innerWidth={device.mobileXL}>
      <Container>
        <GoBackButton />
        <Card>
          <HeadingRow>
            <Heading>
              {t('certificateInfo.certificate')} {cert?.certificateNumber}
            </Heading>
            {cert?.status && (
              <StatusText
                text={cert?.status}
                status={cert?.status === 'Negaliojantis' ? Status.RED : Status.GREEN}
              />
            )}
          </HeadingRow>
          <Date>
            {t('certificateInfo.certificateForm')}: {cert.blankNumber || '-'}
          </Date>
          <TransitInfoLine
            importCountry={cert?.importCountry?.name || '-'}
            exportCompany={cert?.exporter?.name || '-'}
            exportCountry={cert?.exportCountry}
          />
          <GreyCard>
            <CellRow>
              <Cell>
                <Label>{t('certificateInfo.issueDate')}</Label>
                <Paragraph>{format(cert?.issueDate, 'yyyy-MM-dd') || '-'}</Paragraph>
              </Cell>
              <Cell>
                <Label>{t('certificateInfo.issueName')}</Label>
                <Paragraph>{cert?.issueName || '-'}</Paragraph>
              </Cell>
              <Cell>
                <Label>{t('certificateInfo.issueDepartment')}</Label>
                <Paragraph>{cert?.issueDepartment || '-'}</Paragraph>
              </Cell>
              <Cell>
                <Label>{t('certificateInfo.EUDeparture')}</Label>
                <Paragraph>{cert?.post?.name || cert?.postOther || '-'}</Paragraph>
              </Cell>
            </CellRow>
          </GreyCard>
          <AttachmentsRow>
            <Title>{t('certificateInfo.transport')}:</Title>
            <Column>
              {cert?.transporters?.map((transport) => {
                return (
                  <InfoRow>
                    <Circle />
                    <InfoValue>
                      {transport?.type?.title}{' '}
                      {transport.typeOther ? `- ${transport.typeOther}` : ''} (Nr.{' '}
                      {transport.number})
                    </InfoValue>
                  </InfoRow>
                );
              })}
            </Column>
          </AttachmentsRow>
          <AttachmentsRow>
            <Title>{t('certificateInfo.cargo')}:</Title>
            <Column>
              {cert?.loads?.map((load) => {
                return (
                  <InfoRow>
                    <Circle />
                    <InfoValue>
                      {load.type?.title} {load.typeOther ? `- ${load.typeOther}` : ''} (Nr.
                      {load.number})
                    </InfoValue>
                  </InfoRow>
                );
              })}
            </Column>
          </AttachmentsRow>

          <Line />
          <TableContainer>
            <FlexStart>
              <Title>{t('certificateInfo.products')}:</Title>
              {!mappedProducts.length && <Title>{t('certificateInfo.none')}</Title>}
            </FlexStart>
            {!!mappedProducts.length && (
              <Table
                columns={{
                  code: {
                    label: t('certificateInfo.HScode'),
                    show: true,
                  },
                  name: {
                    label: t('certificateInfo.productName'),
                    show: true,
                  },
                  quantity: {
                    label: t('certificateInfo.productQuantity'),
                    show: true,
                  },
                  unit: {
                    label: t('certificateInfo.units'),
                    show: true,
                  },
                  manufacturer: {
                    label: t('certificateInfo.manufacturer'),
                    show: true,
                  },
                }}
                data={{
                  data: mappedProducts,
                }}
                notFoundInfo={{}}
              />
            )}
          </TableContainer>

          <FileRow>
            <Title $minWidth={50}>{t('certificateInfo.attachments')}:</Title>
            {!isLoading && files?.length === 0 && <Title>{t('certificateInfo.none')}</Title>}
            {isLoading && <Loader color={theme.colors.primary} />}
            {files && files.map((file) => <AttachedFileBadge text={file.name} url={file.url} />)}
          </FileRow>
        </Card>
      </Container>
    </Default>
  );
};

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const InfoValue = styled.div`
  font-size: 1.6rem;
  font-weight: 400;
  color: #192f4e;
`;

const TableContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Circle = styled.div`
  border-radius: 50%;
  border: 2px solid #2a4871;
  width: 8px;
  height: 8px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
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
  gap: 12px;
`;

const Title = styled(Label)<{ $minWidth?: number }>`
  color: ${({ theme }) => theme.colors.text.heading};
  font-weight: 700;
  text-align: left;
  min-width: ${({ $minWidth }) => `${$minWidth || 200}px`};
  max-width: 200px;
`;

const FlexStart = styled.div`
  display: flex;
  gap: 8px;
`;

const FileRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 20px 0;
  flex-direction: row;
  gap: 8px;
`;

const LongText = styled.div`
  display: block;
  max-width: 250px;
  width: max-content;
  word-wrap: break-word;
  overflow-wrap: break-word;
  height: auto;
  white-space: normal;
`;

export default CertificateInfo;

import styled, { useTheme } from 'styled-components';
import { IconName } from '../utils/constants';
import Icon from './other/Icons';
import { Label, Paragraph } from './other/Text';

interface Props {
  exportCompany: string;
  exportCountry: string;
  importCompany: string;
  importCountry: string;
}

const TransitInfoLine: React.FC<Props> = (props) => {
  const theme = useTheme();
  return (
    <Container>
      <MiddleRow>
        <Circle />
        <Line />
        <Time>
          <Icon color={theme.colors.border} size={16} name={IconName.truck} />
        </Time>
        <Line />
        <Icon color={theme.colors.primary} name={IconName.placeMark} />
      </MiddleRow>
      <Row>
        <CellLeft>
          <Paragraph>{props.exportCompany}</Paragraph>
          <Label>{props.exportCountry}</Label>
        </CellLeft>
        <CellRight>
          <Paragraph>{props.importCompany}</Paragraph>
          <Label>{props.importCountry}</Label>
        </CellRight>
      </Row>
    </Container>
  );
};

export default TransitInfoLine;

const Container = styled.div`
  width: 100%;
  margin-bottom: 16px;
  color: grey;
  display: grid;
  text-decoration: none;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
`;

const MiddleRow = styled.div`
  display: grid;
  grid-template-columns: 10px 1fr auto 1fr 10px;
  align-items: center;
  margin-top: 12px;
`;

const Circle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: white;
  border: 2px solid ${({ theme }) => theme.colors.primary};
`;

const Line = styled.div`
  width: 100%;
  border-top: 1px dashed ${({ theme }) => theme.colors.border};
`;

const Time = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  font-weight: 600;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const FishingDate = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const FishingWeight = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 20px;
  font-weight: 700;
  align-items: center;
  color: ${({ theme }) => theme.colors.text.primary};
  gap: 4px;
`;

const CellLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const CellRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`;

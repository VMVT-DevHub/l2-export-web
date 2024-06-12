import styled from 'styled-components';
import { device } from '../styles';
import { Header } from '../components/Header';

const Default = ({
  children,
  title,
  description,
  maxWidth = 900,
  innerWidth = device.mobileM,
  topComponent,
}: {
  title?: string;
  description?: string;
  children?: any;
  maxWidth?: number;
  innerWidth?: string;
  topComponent?: JSX.Element;
}) => {
  return (
    <MainContainer>
      <Container maxWidth={maxWidth}>
        <Header />
        <InnerContainer width={innerWidth}>
          {topComponent}
          <Title>{title}</Title>
          <SubTitle>{description}</SubTitle>
          {children}
        </InnerContainer>
      </Container>
    </MainContainer>
  );
};
export default Default;

const SubTitle = styled.div`
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 32px;
`;
const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  padding: 12px;
`;

const Container = styled.div<{ maxWidth: number }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  width: ${({ maxWidth }) => `${maxWidth}px`};
  margin: auto;
`;

const InnerContainer = styled.div<{ width?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${({ width }) => width || device.mobileM} {
    padding: 56px 12px;
  }
`;

const Title = styled.div`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 3.2rem;
  font-weight: 700;
  margin-bottom: 4px;
  text-align: center;
`;

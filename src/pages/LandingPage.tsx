
import styled from 'styled-components';
import { Padding } from '../components/other/Layout';
import { Heading, Label, Paragraph } from '../components/other/Text';
import Default from '../layouts/Default';
import { device } from '../styles';
import { Link } from 'react-router-dom';
import Icon from '../components/other/Icons'
import { IconName } from '../utils/constants';
import Div100vh from 'react-div-100vh';

const LandingPage = () => {
  return (
    <Div100vh>
      <BackgroundContainer>
        <Background src='/landingBackground.svg'/>
      </BackgroundContainer>
      <Default maxWidth={904} innerWidth={device.mobileXL}>
        <Container>
          <Padding $top={50}>
            <StyledHeading>Veterinarijos sertifikatų išdavimas</StyledHeading>
          </Padding>
          <StyledLabel>Šiame portale galite pateikti prašymus eksporto sertifikatui gauti
            ir patikrinti išduoto sertifikato galiojimą
          </StyledLabel>
          <Padding $top={32}>
            <ButtonContainer>
              <StyledLinkBlue to="https://test.sertifikatai.vmvt.lt/">
                <ButtonContainerBlue>
                  <Icon name={IconName.sertificateCheck} />
                  <ButtonTextContainer>
                    Prašymų eksporto sertifikatui gauti pateikimas
                    <Icon name={IconName.continueLight} />
                  </ButtonTextContainer>
                </ButtonContainerBlue>
              </StyledLinkBlue>
              <StyledLinkYellow to="/sertifikatai">
                <ButtonContainerYellow>
                  <Icon name={IconName.sertificateInquiry} />
                  <ButtonTextContainer>
                    Išduotų sertifikatų tikrinimas
                    <Icon name={IconName.continue} />
                  </ButtonTextContainer>
                </ButtonContainerYellow>
              </StyledLinkYellow>
            </ButtonContainer>
          </Padding>
        </Container>
        <ImageContainer>
          <Image src='/l2LandingPage.jpg'/>
        </ImageContainer>
      </Default>
    </Div100vh>
  );
};
const ImageContainer = styled.div`
  position: relative;
  top: -110px;
  z-index: -1;
  width: 90vw;
  max-width: 1440px;
  @media ${device.mobileL} {
    display: none;
  }
  @media ${device.mobileXL} {
    width: 94vw;
    top: -70px;
  }
`;
const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 16px;
`;
const BackgroundContainer = styled.div`
  position: fixed; 
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2; 
`;
const Background = styled.img`
  object-fit: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
`;
const ButtonTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  width: 100%;
  gap: 16px;
  svg {
    flex-shrink: 0; 
    width: 24px;
    height: 24px; 
  }
`;
  
const StyledLinkBlue = styled(Link)`
  text-decoration: none;
  color: white;
  font-family: Axiforma;
  font-size: 24px;
  line-height: 32px;
  width: 50%;
  @media ${device.mobileL} {
    width: 100%;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  gap: 32px;
  @media ${device.mobileL} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const StyledLinkYellow = styled(Link)`
  text-decoration: none;
  color: #192F4E;
  font-family: Axiforma;
  font-size: 24px;
  line-height: 32px;
  width: 50%;
  @media ${device.mobileL} {
    width: 100%;
  }
`;
const ButtonContainerBlue = styled.div`
  background-color: #192F4E;
  padding:32px;
  border-radius: 16px;
  min-height: 231px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const ButtonContainerYellow = styled.div`
  background-color: #FCE28D;
  padding:32px;
  border-radius: 16px;
  min-height: 231px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const StyledHeading = styled(Heading)`
  font-family: Axiforma;
  font-size: 56px;
  font-weight: 700;
  line-height: 64px;
  text-align: start;
`;
const StyledLabel = styled(Label)`
  font-family: Axiforma;
  font-size: 18px;
  line-height: 29px;
  max-width: 605px;
  padding-top: 16px;
  text-align: start;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
`;
export default LandingPage;

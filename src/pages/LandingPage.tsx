import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Icon from '../components/other/Icons';
import landingRoad from '../components/other/images/l2LandingPage.jpg';
import landingBackground from '../components/other/images/landingBackground.svg';
import { Padding } from '../components/other/Layout';
import { Heading, Label } from '../components/other/Text';
import Default from '../layouts/Default';
import i18n from '../locale/i18n';
import { device } from '../styles';
import { IconName } from '../utils/constants';

const LandingPage = () => {
  const isLocalHost = import.meta.env.VITE_EXPORT_URL?.length == 0 ? true : false;
  const { t } = useTranslation();
  return (
    <PageContainer>
      <BackgroundContainer>
        <Background src={landingBackground} />
      </BackgroundContainer>
      <Default maxWidth={900} innerWidth={device.mobileXL}>
        <Container>
          <Padding $top={50}>
            <StyledHeading>{t('certificateIntro.title')}</StyledHeading>
          </Padding>
          <StyledLabel>{t('certificateIntro.subtitle')}</StyledLabel>
          <Padding $top={32}>
            <ButtonContainer>
              {t('certificateCheck.lng') == 'lt' ? (
                <StyledLinkBlue to={import.meta.env.VITE_SERTIFIKATAI_URL} target="_parent">
                  <ButtonContainerBlue>
                    <Icon name={IconName.sertificateCheck} />
                    <ButtonTextContainer>
                      Prašymų eksporto sertifikatui gauti pateikimas
                      <Icon name={IconName.continueLight} />
                    </ButtonTextContainer>
                  </ButtonContainerBlue>
                </StyledLinkBlue>
              ) : null}
              <StyledLinkYellow
                to={`${import.meta.env.VITE_EXPORT_URL}${
                  !isLocalHost ? i18n.language + '/' : ''
                }sertifikatai`}
                target="_parent"
                theme={{ singleButton: t('certificateCheck.lng') !== 'lt' }}
              >
                <ButtonContainerYellow>
                  <Icon name={IconName.sertificateInquiry} />
                  <ButtonTextContainer>
                    {t('certificateIntro.certificateCheckLink')}
                    <Icon name={IconName.continue} />
                  </ButtonTextContainer>
                </ButtonContainerYellow>
              </StyledLinkYellow>
            </ButtonContainer>
          </Padding>
        </Container>
        <ImageContainer>
          <Image src={landingRoad} />
        </ImageContainer>
      </Default>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  height: 100vh;
  overflow-y: hidden;
  @media ${device.mobileL}, (max-height: 650px) {
    overflow-y: scroll;
  }
`;
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
    width: 98%;
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
    width: 90%;
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
  color: #192f4e;
  font-family: Axiforma;
  font-size: 24px;
  line-height: 32px;
  width: ${(props) => (props.theme.singleButton ? '436px' : '50%')};
  @media ${device.mobileL} {
    width: 90%;
  }
`;
const ButtonContainerBlue = styled.div`
  background-color: #192f4e;
  padding: 32px;
  border-radius: 16px;
  min-height: 231px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:hover {
    background-color: #0e1a2b;
  }
`;
const ButtonContainerYellow = styled.div`
  background-color: #fce28d;
  padding: 32px;
  border-radius: 16px;
  min-height: 231px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:hover {
    background-color: #ffebab;
  }
`;
const StyledHeading = styled(Heading)`
  font-family: Axiforma;
  font-size: 56px;
  font-weight: 700;
  line-height: 64px;
  text-align: start;
  @media ${device.mobileL} {
    font-size: 40px;
    line-height: 58px;
  }
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

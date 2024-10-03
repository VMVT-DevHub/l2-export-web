import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import styled, { useTheme } from 'styled-components';
import { IconName } from '../utils/constants';
import Icon from './other/Icons';

interface Props {
  goTo?: string;
}

const GoBackButton: React.FC<Props> = ({ goTo = '/' }) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <Container
      onClick={() => {
        navigate(goTo);
      }}
    >
      <Icon name={IconName.backArrow} size={20} color={theme.colors.secondary} />
      <BackText>Grįžti atgal</BackText>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  &:hover,
  &:focus {
    cursor: pointer;
  }
  user-select: none;
`;

const BackText = styled.span`
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  color: ${({ theme }) => theme.colors.secondary};
`;

export default GoBackButton;

import React from 'react';
import styled, { useTheme } from 'styled-components';
import { IconName } from '../utils/constants';
import Icon from './other/Icons';

interface Props {
  text: string;
  url: string;
}

const AttachedFileBanner: React.FC<Props> = ({ text, url }) => {
  const theme = useTheme();
  return (
    <Container href={url} target="_blank">
      <Icon
        style={{ transform: 'rotate(45deg)' }}
        size={20}
        color={theme.colors.primary}
        name={IconName.attachment}
      />
      <Text>{text}</Text>
    </Container>
  );
};

const Container = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 16px 4px 16px;
  width: max-content;
  gap: 8px;
  background-color: #e8edf6;
  border-radius: 20px;
`;

const Text = styled.span`
  font-family: Arial;
  font-size: 16px;
  font-weight: 00;
  line-height: 24px;
  text-align: left;
  color: ${({ theme }) => theme.colors.primary};
`;

export default AttachedFileBanner;

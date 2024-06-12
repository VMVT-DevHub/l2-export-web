import React from 'react';
import styled from 'styled-components';

interface Props {
  text: string;
}

const ErrorBanner: React.FC<Props> = ({ text }) => {
  return (
    <Container>
      <Text>{text}</Text>
    </Container>
  );
};

const Container = styled.div`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.danger};
  background-color: ${({ theme }) => theme.colors.light.danger};
  border-radius: 4px;
`;

const Text = styled.span`
  font-family: Arial;
  font-size: 16px;
  font-weight: 00;
  line-height: 24px;
  text-align: left;
  color: ${({ theme }) => theme.colors.danger};
`;

export default ErrorBanner;

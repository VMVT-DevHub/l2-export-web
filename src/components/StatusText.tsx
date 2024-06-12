import React from 'react';
import styled, { useTheme } from 'styled-components';

export enum Status {
  GREEN = 'GREEN',
  RED = 'RED',
}

interface Props {
  text: string;
  status: Status;
}

const StatusText: React.FC<Props> = ({ text, status }) => {
  const theme = useTheme();

  const colors = {
    [Status.GREEN]: {
      bg: theme.colors.light.success,
      text: theme.colors.success,
    },
    [Status.RED]: {
      bg: theme.colors.light.danger,
      text: theme.colors.danger,
    },
  };
  return (
    <Container color={colors[status].bg}>
      <Text color={colors[status].text}>{text}</Text>
    </Container>
  );
};

const Container = styled.div<{ color?: string }>`
  padding: 10px;
  background-color: ${({ theme, color }) => color || theme.colors.danger};
  border-radius: 4px;
`;

const Text = styled.span<{ color?: string }>`
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: ${({ theme, color }) => color || theme.colors.danger};
`;

export default StatusText;

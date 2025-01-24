import styled from 'styled-components';

export const Heading = styled.span`
  font-family: Arial;
  font-size: 32px;
  font-weight: 700;
  line-height: 24px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text.heading};
`;

export const Paragraph = styled.span`
  font-family: Arial;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const Label = styled.span`
  font-family: Arial;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  color: ${({ theme }) => theme.colors.text.label};
`;

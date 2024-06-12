import styled from 'styled-components';

export const Padding = styled.div<{
  $top?: number;
  $right?: number;
  $bottom?: number;
  $left?: number;
  $horizontal?: number;
  $vertical?: number;
  $padding?: number;
}>`
  ${({ $top }) => $top && `padding-top: ${$top}px`};
  ${({ $right }) => $right && `padding-right: ${$right}px`};
  ${({ $bottom }) => $bottom && `padding-bottom: ${$bottom}px`};
  ${({ $left }) => $left && `padding-left: ${$left}px`};
  ${({ $horizontal, $vertical }) =>
    $horizontal || ($vertical && `padding: ${$vertical || 0}px ${$horizontal || 0}px`)};
  ${({ $padding }) => $padding && `padding: ${$padding}px`};
`;

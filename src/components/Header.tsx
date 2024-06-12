import React, { useState } from 'react';
import Logo from './other/Logo';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

export const Header = () => {
  const { i18n } = useTranslation();
  // saving into state, bcs changing lng makes array arrangement to change
  const [languages, _setLanguages] = useState(i18n.languages);

  return (
    <Wrapper>
      <Logo />
      <div>
        {languages.map((lng) => (
          <LanguageOption
            onClick={() => i18n.changeLanguage(lng)}
            key={lng}
            selected={i18n.language === lng}
          >
            {lng}
          </LanguageOption>
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const LanguageContainer = styled.div``;

const LanguageOption = styled.span<{ selected: boolean }>`
  padding-left: 8px;
  padding-right: 8px;
  font-family: Arial;
  font-size: 16px;
  font-weight: 400;
  line-height: 18.4px;
  text-align: center;
  text-transform: uppercase;
  color: ${({ theme, selected }) => (selected ? theme.colors.primary : theme.colors.text.label)};
  ${({ selected }) => (selected ? 'text-decoration:  underline;' : '')};
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
  }
  &:active {
    color: ${({ theme }) => theme.colors.primary};
  }
  user-select: none;
`;

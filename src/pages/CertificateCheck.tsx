import { Button, device, SelectField, TextField } from '@aplinkosministerija/design-system';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import ErrorBanner from '../components/ErrorBanner';
import { Padding } from '../components/other/Layout';
import { Heading, Label, Paragraph } from '../components/other/Text';
import TabBar from '../components/TabBar';
import Default from '../layouts/Default';
import { ButtonVariants, theme } from '../styles';
import { useCheckCertificate, useTranslateFormErrors } from '../utils/hooks';
import { validateCheckCertForm, validateCheckCertFormExport } from '../utils/validation';
import i18n from '../locale/i18n';

enum FormTabs {
  ONE = 'ONE',
  TWO = 'TWO',
}

const tabs = [
  { key: FormTabs.ONE, label: 'A/B/LT' },
  { key: FormTabs.TWO, label: 'EXPORT.EU.LT' },
];

const CertificateCheck = () => {
  const { t } = useTranslation();
  const { error, isError, isLoading, mutateAsync: checkCertificate } = useCheckCertificate();
  const [selectedTab, setSelectedTab] = useState<string>(tabs[0].key);

  return (
    <Default>
      <Padding $vertical={20}>
        <Heading>{t('certificateCheck.title')}</Heading>
      </Padding>
      <Padding $bottom={40}>
        <Label>{t('certificateCheck.subtitle')}</Label>
      </Padding>
      <Card>
        <TabBar tabs={tabs} activeTab={selectedTab} onClick={(key) => setSelectedTab(key)} />
        <CardContent>
          <Formik
            initialValues={{
              countryCode: '',
              year: '',
              certificateNumber: '',
              blankNumber: '',
            }}
            validationSchema={
              selectedTab === FormTabs.ONE ? validateCheckCertForm() : validateCheckCertFormExport()
            }
            validateOnChange={false}
            onSubmit={(values, { setSubmitting }) => {
              checkCertificate({
                params: {
                  ...(selectedTab === FormTabs.TWO && values?.year && { year: values.year }),
                  certificateNumber: values.certificateNumber,
                  blankNumber: values.blankNumber,
                },
              });
              setSubmitting(false);
            }}
          >
            {(formikProps) => {
              const { values, errors, setFieldValue, isSubmitting } = formikProps;
              
              useTranslateFormErrors(formikProps);
              
              return (
                <Form>
                  <FormWrapper>
                  <InputWrapper>
                    {selectedTab === FormTabs.ONE && (
                      <SmallFieldWrapper>
                        <StyledSelectField
                          options={['A', 'B', 'LT']}
                          getOptionLabel={(option) => option}
                          onChange={(value) => setFieldValue('countryCode', value)}
                          value={values.countryCode}
                          placeholder="xx"
                          error={errors.countryCode}
                          clearable={false}
                        />
                      </SmallFieldWrapper>
                    )}
                    {selectedTab === FormTabs.TWO && (
                      <>
                        <FormLabel>EXPORT.EU.LT</FormLabel>
                        <SmallFieldWrapper>
                          <TextField
                            onChange={(value) => setFieldValue('year', value)}
                            value={values.year}
                            placeholder="202x"
                            error={errors.year}
                          />
                        </SmallFieldWrapper>
                        <FormLabel>.</FormLabel>
                      </>
                    )}
                    <FieldWrapper>
                      <TextField
                        onChange={(value) => setFieldValue('blankNumber', value)}
                        value={values.blankNumber}
                        placeholder="xxxxxxx"
                        error={errors.blankNumber}
                      />
                    </FieldWrapper>
                    <FormLabel>/EXP - </FormLabel>
                    <FieldWrapper>
                      <TextField
                        onChange={(value) => setFieldValue('certificateNumber', value)}
                        value={values.certificateNumber}
                        placeholder="123456"
                        error={errors.certificateNumber}
                      />
                    </FieldWrapper>
                  </InputWrapper>
                  {isError && (
                    <ErrorBanner
                      text={
                        error.response?.status === 404
                          ? t('certificateCheck.sertificateNotFound')
                          : error?.message
                      }
                    />
                  )}
                  <Button
                    type="submit"
                    disabled={isSubmitting || isLoading}
                    loading={isSubmitting || isLoading}
                    variant={ButtonVariants.PRIMARY}
                  >
                    {t('certificateCheck.check')}
                  </Button>
                </FormWrapper>
                </Form>
                
            )}}
          </Formik>
        </CardContent>
        <WarningContainer>
          <WarningLabel>
            {t('certificateCheck.validityWarning')}
            {t('certificateCheck.lng') == 'ua' ? (
              <StyledLink href="http://vetlt1.vet.lt/exportru/Loginru.aspx">тут</StyledLink>
            ) : (
              ''
            )}
          </WarningLabel>
        </WarningContainer>
      </Card>
    </Default>
  );
};

const StyledLink = styled.a`
  color: ${theme.colors.danger};
  text-decoration: underline;
  &:visited {
    color: ${theme.colors.danger};
  }
  &:hover {
    color: #d10909;
  }
`;

const WarningContainer = styled.div`
  background-color: #ffe2e7;
  margin-top: 20px;
  width: 100%;
  padding: 20px 10px;
  text-align: center;
  border-radius: 16px;
`;

const WarningLabel = styled(Paragraph)`
  text-align: center;
  font-size: 14px;
  color: ${theme.colors.danger};
  font-size: 16px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 3px 4px 0px #00000014;
  border-radius: 16px;
  width: auto;
  @media ${device.desktop} {
    width: 70%;
  }
`;

const CardContent = styled.div`
  padding: 8px;
  @media ${device.desktop} {
    padding: 32px;
  }
  background: white;
  border-radius: 0 0 16px 16px;
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: row;
  flex-wrap: wrap;
  @media ${device.desktop} {
    flex-wrap: nowrap;
  }
`;

const FormLabel = styled(Paragraph)`
  height: 100%;
  align-self: center;
  white-space: nowrap;
  color: #192f4e;
`;

const DisclaimerLabel = styled(Paragraph)`
  text-align: center;
  font-size: 14px;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const FieldWrapper = styled.div`
  flex-grow: 1;
  max-width: 200px;
  max-height: 70px;
`;

const StyledSelectField = styled(SelectField)`
  div {
    background-color: ${theme.colors.grey};
  }
`;

const SmallFieldWrapper = styled.div`
  width: 150px;
  @media ${device.mobileL} {
    width: 100%;
  }
`;

export default CertificateCheck;

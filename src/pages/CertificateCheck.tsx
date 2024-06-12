import React, { useState } from 'react';
import Default from '../layouts/Default';
import { useTranslation } from 'react-i18next';
import {
  Button,
  ButtonVariants,
  NumericTextField,
  SelectField,
  TextField,
  device,
} from '@aplinkosministerija/design-system';
import styled from 'styled-components';
import TabBar from '../components/TabBar';
import { Form, Formik } from 'formik';
import ErrorBanner from '../components/ErrorBanner';
import { Heading, Label, Paragraph } from '../components/other/Text';
import { Padding } from '../components/other/Layout';
import { useCheckCertificate } from '../utils/hooks';
import { validateCheckCertForm, validateCheckCertFormExport } from '../utils/validation';

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
              grantedNumber: '',
            }}
            validationSchema={
              selectedTab === FormTabs.ONE ? validateCheckCertForm : validateCheckCertFormExport
            }
            validateOnChange={false}
            onSubmit={(values, { setSubmitting }) => {
              checkCertificate({
                params: {
                  ...(selectedTab === FormTabs.TWO && values?.year && { year: values.year }),
                  certificateNumber: values.certificateNumber,
                  grantedNumber: values.grantedNumber,
                },
              });
              setSubmitting(false);
            }}
          >
            {({ values, errors, setFieldValue, isSubmitting }) => (
              <Form>
                <FormWrapper>
                  <InputWrapper>
                    {selectedTab === FormTabs.ONE && (
                      <SmallFieldWrapper>
                        <SelectField
                          options={['A', 'B', 'LT']}
                          getOptionLabel={(option) => option}
                          onChange={(value) => setFieldValue('countryCode', value)}
                          value={values.countryCode}
                          placeholder="xx"
                          error={errors.countryCode}
                        />
                      </SmallFieldWrapper>
                    )}
                    {selectedTab === FormTabs.TWO && (
                      <>
                        <FormLabel>EXPORT.EU.LT</FormLabel>
                        <SmallFieldWrapper $width={100}>
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
                        onChange={(value) => setFieldValue('certificateNumber', value)}
                        value={values.certificateNumber}
                        placeholder="123456"
                        error={errors.certificateNumber}
                      />
                    </FieldWrapper>
                    <FormLabel>/L2 - </FormLabel>
                    <FieldWrapper>
                      <NumericTextField
                        onChange={(value) => setFieldValue('grantedNumber', value)}
                        value={values.grantedNumber}
                        placeholder="123456"
                        error={errors.grantedNumber}
                      />
                    </FieldWrapper>
                  </InputWrapper>
                  {isError && (
                    <ErrorBanner
                      text={
                        error.response?.status === 404
                          ? 'Sertifikatas nerastas. Patikrinkite, ar duomenys įvesti teisingai.'
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
                    Tikrinti
                  </Button>
                  <DisclaimerLabel>
                    Paieška vykdoma ne senesnėms siuntoms nei 1 metų.
                  </DisclaimerLabel>
                </FormWrapper>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </Default>
  );
};

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

const SmallFieldWrapper = styled.div<{ $width?: number }>`
  width: ${({ $width }) => ($width ? $width : 65)}px;
`;

export default CertificateCheck;

// The API matches certificate and blank numbers exactly (spaces and case are ignored),
// so the form parts are combined into the values stored in the database:
//   certificate number: EXP26000843
//   blank number:       B58575 (A/B/LT tab) or 2026.4866480 (EXPORT.EU.LT tab)

const clean = (value?: string) => (value || '').replace(/\s+/g, '').toUpperCase();

export const buildCertificateNumber = (input: string, year?: string) => {
  let digits = clean(input).replace(/^EXP/, '').replace(/^[-/]+/, '');

  // Certificate numbers are EXP + 2-digit year + 6 digits. If only the last 6 digits were
  // entered and the year is known, add the year part.
  if (/^\d{6}$/.test(digits) && /^\d{4}$/.test(clean(year || ''))) {
    digits = `${clean(year).slice(2)}${digits}`;
  }

  return `EXP${digits}`;
};

export const buildBlankNumber = (input: string, prefix: { countryCode?: string; year?: string }) => {
  const value = clean(input);

  if (prefix.year) {
    const year = clean(prefix.year);
    const digits = value.startsWith(`${year}.`) ? value.slice(year.length + 1) : value;
    return `${year}.${digits}`;
  }

  const countryCode = clean(prefix.countryCode || '');
  const digits = countryCode && value.startsWith(countryCode) ? value.slice(countryCode.length) : value;
  return `${countryCode}${digits}`;
};

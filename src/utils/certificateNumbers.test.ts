import { describe, expect, it } from 'vitest';
import { buildBlankNumber, buildCertificateNumber } from './certificateNumbers';

describe('buildCertificateNumber', () => {
  it('prefixes the digits after /EXP- with EXP', () => {
    expect(buildCertificateNumber('26000843')).toBe('EXP26000843');
  });

  it('accepts the full number, dashes and spaces', () => {
    expect(buildCertificateNumber('EXP26000843')).toBe('EXP26000843');
    expect(buildCertificateNumber('exp-26000843')).toBe('EXP26000843');
    expect(buildCertificateNumber(' 26 000 843 ')).toBe('EXP26000843');
  });

  it('adds the year part to a 6-digit number when the year is known', () => {
    expect(buildCertificateNumber('000837', '2026')).toBe('EXP26000837');
  });

  it('leaves a 6-digit number alone when the year is unknown', () => {
    expect(buildCertificateNumber('000837')).toBe('EXP000837');
  });
});

describe('buildBlankNumber', () => {
  it('prefixes the country code on the A/B/LT tab', () => {
    expect(buildBlankNumber('58575', { countryCode: 'B' })).toBe('B58575');
    expect(buildBlankNumber('000000', { countryCode: 'LT' })).toBe('LT000000');
  });

  it('does not double a country code the user already typed', () => {
    expect(buildBlankNumber('b58575', { countryCode: 'B' })).toBe('B58575');
  });

  it('prefixes the year with a dot on the EXPORT.EU.LT tab', () => {
    expect(buildBlankNumber('4866480', { year: '2026' })).toBe('2026.4866480');
    expect(buildBlankNumber('2026.4866480', { year: '2026' })).toBe('2026.4866480');
  });
});

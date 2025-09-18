export function isValidate(phoneNumber) {
  const iranMobileRegex = /^(0|\+98)?(9\d{9})$/;

  return iranMobileRegex.test(phoneNumber);
}

export const isValidIranianNationalCode = (code) => {
  if (!/^\d{10}$/.test(code)) return false;
  if (/^(\d)\1{9}$/.test(code)) return false;

  const check = +code[9];
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += +code[i] * (10 - i);
  }
  const remainder = sum % 11;

  return (
    (remainder < 2 && check === remainder) ||
    (remainder >= 2 && check === 11 - remainder)
  );
};

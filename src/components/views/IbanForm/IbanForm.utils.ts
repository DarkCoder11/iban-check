export const checkIBAN = (input: string) => {
  const normalizedIban = input.replace(/\s/g, '');

  if (!/^ME\d{2}\d{3}\d{13}\d{2}$/.test(normalizedIban)) {
    return false;
  }

  const reorderedIban =
    normalizedIban.substring(4) + normalizedIban.substring(0, 4);

  const convertedIban = reorderedIban
    .split('')
    .map((char) => {
      const charCode = char.charCodeAt(0);
      if (charCode >= 65 && charCode <= 90) {
        return charCode - 55;
      } else {
        return char;
      }
    })
    .join('');

  const remainder = convertedIban.split('').reduce((acc, digit) => {
    const value = Number(digit);
    if (!isNaN(value)) {
      return (acc * 10 + value) % 97;
    } else {
      return acc;
    }
  }, 0);

  return remainder === 1;
};

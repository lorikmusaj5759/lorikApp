export const formatWithThreshold = (
  amount: number | null,
  threshold: number,
  locale: string,
  options: Intl.NumberFormatOptions,
): string => {
  if (amount === null || amount === 0) {
    return amount === null ? '' : new Intl.NumberFormat(locale, options).format(0);
  }
  return amount < threshold
    ? `<${new Intl.NumberFormat(locale, options).format(threshold)}`
    : new Intl.NumberFormat(locale, options).format(amount);
};

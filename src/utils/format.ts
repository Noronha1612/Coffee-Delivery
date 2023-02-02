export const formatCurrency = (
  value: number,
  locale: string = "pt-BR",
  currency: string = "BRL"
) => {
  return new Intl.NumberFormat(locale, {
    currency,
    style: "currency",
  }).format(value);
};

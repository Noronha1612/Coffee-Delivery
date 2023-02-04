export enum Payment {
  CreditCard = "credit-card",
  DebitCard = "debit-card",
  Cash = "cash",
}

export const PaymentLabel: Record<Payment, string> = {
  [Payment.CreditCard]: "Cartão de Crédito",
  [Payment.DebitCard]: "Cartão de Débito",
  [Payment.Cash]: "Dinheiro",
};

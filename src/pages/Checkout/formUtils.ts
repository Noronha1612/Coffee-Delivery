import { Payment } from "@/models/Payment";
import * as yup from "yup";

export type FormData = {
  cep: string;
  street: string;
  houseNumber: string;
  complementaryInfo: string;
  district: string;
  city: string;
  state: string;
  payment: Payment;
};

export const formSchema = yup.object({
  cep: yup
    .string()
    .required()
    .matches(/^([\d]{2})\.?([\d]{3})\-?([\d]{3})/),
  city: yup.string().required().min(3),
  complementaryInfo: yup.string(),
  district: yup.string().required().min(3),
  houseNumber: yup.string().required(),
  payment: yup
    .string()
    .required("Selecione uma forma de pagamento")
    .oneOf(Object.values(Payment)),
  state: yup.string().required().min(3),
  street: yup.string().required().length(2),
});

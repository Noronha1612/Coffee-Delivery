import { toast } from "react-toastify";
import { Coffee } from "../models/Coffee";
import { api } from "./api";
export class CoffeeService {
  static async getCoffees() {
    return toast.promise(api.get<Coffee[]>("/coffees"), {
      error: "Ooops, algo deu errado",
      pending: "Carregando cafés...",
      success: "Cafés carragados!",
    });
  }
}

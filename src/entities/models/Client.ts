import { Address } from "./address"

export class Client {
  _id!: string
  name!: string
  lastname!: string
  identity!: string
  identityType!: "Id" | "Passport" | string
  email!: string
  phone!: string
  addresses!: Address[]
}
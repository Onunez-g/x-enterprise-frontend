import { Address } from "../models/address"

export class ClientDto {
  name!: string
  lastname!: string
  identity!: string
  identityType!: string
  email!: string
  phone!: string
  addresses!: Address[]
  [key: string]: any
}
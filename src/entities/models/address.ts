export class Address {
  city!: string
  country!: string
  state!: string
  streetName!: string
  zipCode!: string
  aptNumber!: number | string
  [key: string]: any
}

export function addressToString(addr: Address): string {
  if(!addr) return ""
  return `${addr.streetName} ${addr.aptNumber}, ${addr.city}, ${addr.state} ${addr.zipCode}`
}
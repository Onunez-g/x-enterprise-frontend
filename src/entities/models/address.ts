interface IAdress {
  addressToString(): string 
}
export class Address implements IAdress {
  city!: string
  country!: string
  state!: string
  streetName!: string
  zipCode!: string
  aptNumber!: number | string

  constructor() {
    this.addressToString = this.addressToString.bind(this)
  }
  addressToString(): string {
    let str = `${this.streetName} ${this.aptNumber}, ${this.city}, ${this.state} ${this.zipCode}`
    return str
  }
}
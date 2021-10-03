import faker from "faker"
import { Address } from "../entities/models/address"
import { Client } from "../entities/models/Client"

export const getClients = (): Client[] => {
  let clients: Client[] = []
  for (let i = 0; i < 100; i++) {
    const addr = faker.helpers.contextualCard().address
    
    let address = new Address()
    address.aptNumber = addr.suite
    address.streetName = addr.street
    address.city = addr.city
    address.state = faker.address.state(true)
    address.country = "United States"
    address.zipCode = addr.zipcode
    clients.push({
      name: faker.name.firstName(),
      lastName: faker.name.lastName(),
      identifier: faker.random.alphaNumeric(11),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumberFormat(),
      adresses: [address]
    })
  }
  return clients
}
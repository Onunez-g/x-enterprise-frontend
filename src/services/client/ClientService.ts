import { ClientDto } from "../../entities/dto/ClientDto"
import { Client } from "../../entities/models/Client"
import Http from "../http/Httpclient"

class ClientServ {
  GetClients(): Promise<Client[]> {
    return new Promise<Client[]>((resolve, reject) => {
      Http.get("/client")
      .then(res => resolve(res as Client[]))
      .catch(err => reject(err))
    })
  }
  GetClientById(id: string): Promise<Client> {
    return new Promise<Client>((resolve, reject) => {
      Http.get(`/client/${id}`)
      .then(res => resolve(res as Client))
      .catch(err => reject(err))
    })
  }
  CreateClient(client: ClientDto): Promise<Client> {
    return new Promise<Client>((resolve, reject) => {
      Http.post(`/client`, client)
      .then(res => resolve(res as Client))
      .catch(err => reject(err))
    })
  }
  UpdateClient(id: string, client: ClientDto): Promise<Client> {
    return new Promise<Client>((resolve, reject) => {
      Http.put(`/client/${id}`, client)
      .then(res => resolve(res as Client))
      .catch(err => reject(err))
    })
  }
  DeleteClient(id: string) : Promise<Client> {
    return new Promise<Client>((resolve, reject) => {
      Http.delete(`/client/${id}`)
      .then(res => resolve(res as Client))
      .catch(err => reject(err))
    })
  }
}

const ClientService = new ClientServ()
export default ClientService
import axios from "axios";
class HttpClient {
  constructor() {
    axios.defaults.baseURL = process.env.REACT_APP_API;
  }
  get<t>(url: any): Promise<t> {
    return new Promise<t>((resolve, reject) => {
      axios
        .get(url)
        .then((res: any) => {
          const result = res.data;
          resolve(result);
        })
        .catch((err: any) => {
          reject(err);
        });
    });
  }
  post<t>(url: any, data: any): Promise<t> {
    return new Promise<t>((resolve, reject) => {
      axios
        .post(url, data)
        .then((res: any) => {
          const result = res.data;
          resolve(result);
        })
        .catch((err: any) => {
          reject(err);
        });
    });
  }

  put<t>(url: any, data: any): Promise<t> {
    return new Promise<t>((resolve, reject) => {
      axios
        .put(url, data)
        .then((res: any) => {
          const result = res.data;
          resolve(result);
        })
        .catch((err: any) => {
          reject(err);
        });
    });
  }

  delete<t>(url: any): Promise<t> {
    return new Promise<t>((resolve, reject) => {
      axios
        .delete(url)
        .then((res: any) => {
          const result = res.data;
          resolve(result);
        })
        .catch((err: any) => {
          reject(err);
        });
    });
  }
}

const Http = new HttpClient();
export default Http;
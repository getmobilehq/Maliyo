import { AxiosInstance } from "axios";

class Auth {
  client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  login(userDetails: { email: string; password: string }) {
    return this.client.post("/users/login/", userDetails);
  }

  signup(userData: { name: string; email: string; password: string }) {
    return this.client.post("/users/", userData);
  }
}

export default Auth;

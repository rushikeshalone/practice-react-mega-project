import conf from "./conf/conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account ;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    //.setSelfSigned(true);
    this.account = new Account(this.client);
  }

  // this function is used to register a new user
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        //call another Method
        return this.LogIn({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      return error;
    }
  }

  async LogIn({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw new Error(error);
    }
  }

  async getCurrentUser() {
    try {
      await this.account.get();
    } catch (error) {
      throw new Error(error);
    }

    // return null;
    return  null;
  }

  async logOut() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.error("Apprite serveice ::LogOut::error", error);
    }
  }

}

const authService = new AuthService();

export default authService;

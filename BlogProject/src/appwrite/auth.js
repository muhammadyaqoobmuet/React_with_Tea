import config from "../config/config";
import { Client, Account, ID } from "appwrite";

export class AuthServices {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.account = new Account(this.client); // initializes the Account object with the configured Client, enabling your AuthServices class to use Appwrite’s account management API to handle user authentication and account-related operations.
  }
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
    } catch (error) {
      throw error;
    }
    if (userAccount) {
      return this.login({ email, password });
    } else {
      return userAccount;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.error("error is getUser");
    }
    return null;
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.error("error in logout session ", error);
    }
  }
}

const authService = new AuthServices();
export default authService;

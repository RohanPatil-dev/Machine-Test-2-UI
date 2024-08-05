
import user from "../Models/user"
import userServer from "../services/user"

const users = {
    signup: async (email, password) => {
        const userData = new user(email, password);
        return await userServer.signup(userData);
      },
    
      signin: async (email, password) => {
        const userData = new user(email, password);
        return await userServer.signin(userData);
      }
}

export default users
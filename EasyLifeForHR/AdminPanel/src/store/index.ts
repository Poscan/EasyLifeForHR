import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
import User, { IUser, IUserGroup, UserGroup } from "./model/user";

Vue.use(Vuex);

export class SuperPuperDuperService {
  async GetUsers(): Promise<User[]> {
    return (await axios.get("http://192.168.43.210:5000/User/api")).data.map((x: IUser) => new User(x));
  }

  async Authorize(login: string, password: string): Promise<number> {
    return (await axios.get(`http://192.168.43.210:5000/Auth/api?login=${login}&password=${password}`));
  }

  async GetUserGroup(): Promise<UserGroup[]> {
    return (await axios.get("http://192.168.43.210:5000/api/user-groups")).data.map((x: IUserGroup) => new UserGroup(x));
  }

  
}

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    
  },
  modules: {},
});

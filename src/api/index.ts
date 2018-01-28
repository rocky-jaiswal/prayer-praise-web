import axios from 'axios';

import Config from '../config';
import { SharedMessageType } from '../constants/types';

const AppAPI = {

  init() {
    return axios.create({
      headers: {
        common: {
          Authorization: sessionStorage.getItem('jwtToken') || ''
        }
      }
    });
  },

  async createToken(accessToken: string) {
    return await AppAPI.init()
      .post(Config.env.baseURL + '/token', { accessToken });
  },

  async fetchUserProfile() {
    return await AppAPI.init()
      .get(Config.env.baseURL + '/me');
  },

  async submitMessage(message: SharedMessageType) {
    return await AppAPI.init()
      .post(Config.env.baseURL + '/messages', { message });
  },

  async fetchSharedMessages() {
    return await AppAPI.init()
      .get(Config.env.baseURL + '/sharedMessages');
  },

  async fetchMyMessages() {
    return await AppAPI.init()
      .get(Config.env.baseURL + '/messages');
  },

  async deleteMessage(id: number) {
    return await AppAPI.init()
      .delete(Config.env.baseURL + `/messages/${id}`);
  },

  async editMessage(id: number) {
    return await AppAPI.init()
      .get(Config.env.baseURL + `/messages/${id}`);
  },

  async updateMessage(message: SharedMessageType) {
    return await AppAPI.init()
      .put(Config.env.baseURL + `/messages/${message.id}`, { message });
  }

};

export default AppAPI;

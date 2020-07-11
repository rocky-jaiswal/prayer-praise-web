import axios from 'axios'

import Config from '../config'
import { SharedMessageType } from '../constants/types'

const AppAPI = {
  init() {
    return axios.create({
      headers: {
        common: {
          Authorization: localStorage.getItem('jwtToken') || '',
        },
      },
    })
  },

  async createToken(accessToken: string) {
    return AppAPI.init().post(Config.env.baseURL + '/token', {
      accessToken,
    })
  },

  async fetchUserProfile() {
    return AppAPI.init().get(Config.env.baseURL + '/me')
  },

  async submitMessage(message: SharedMessageType) {
    return AppAPI.init().post(Config.env.baseURL + '/messages', { message })
  },

  async fetchSharedMessages(page: number = 1) {
    return AppAPI.init().get(
      `${Config.env.baseURL}/sharedMessages?page=${page}`
    )
  },

  async fetchMyMessages() {
    return AppAPI.init().get(Config.env.baseURL + '/messages')
  },

  async deleteMessage(id: number) {
    return AppAPI.init().delete(Config.env.baseURL + `/messages/${id}`)
  },

  async editMessage(id: number) {
    return AppAPI.init().get(Config.env.baseURL + `/messages/${id}`)
  },

  async updateMessage(message: SharedMessageType) {
    return AppAPI.init().put(Config.env.baseURL + `/messages/${message.id}`, {
      message,
    })
  },
}

export default AppAPI

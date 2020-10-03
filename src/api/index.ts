import axios from 'axios'

import Config from '../config'
import { SharedMessageType } from '../constants/types'

const AppAPI = {
  init() {
    return axios.create({
      headers: {
        common: {
          Authorization: sessionStorage.getItem('jwtToken') || '',
        },
      },
    })
  },

  async login(accessToken: string) {
    return AppAPI.init().post(Config.env.baseURL + '/session', {
      accessToken,
    })
  },

  async fetchUserProfile() {
    return AppAPI.init().get(Config.env.baseURL + '/me')
  },

  async createMessage(message: SharedMessageType) {
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
      message: {
        messageText: message.messageText,
        sharedStatus: message.sharedStatus,
      },
    })
  },

  async incrementAgreements(messageId: number) {
    return AppAPI.init().post(
      Config.env.baseURL + `/messages/${messageId}/agreements`
    )
  },
}

export default AppAPI

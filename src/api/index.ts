import axios from 'axios'

import Config from '../config'
import { MessageForEditType, SharedMessageType } from '../constants/types'

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

  async incrementAgreements(messageId: string) {
    return AppAPI.init().post(
      Config.env.baseURL + `/messages/${messageId}/agreements`
    )
  },

  async fetchSharedMessage(messageId: string) {
    return AppAPI.init().get(
      Config.env.baseURL + `/sharedMessages/${messageId}`
    )
  },

  async createComment({ msgId, comment }: Record<string, string>) {
    return AppAPI.init().post(
      Config.env.baseURL + `/sharedMessages/${msgId}/comments`,
      { comment: { commentText: comment } }
    )
  },

  async getAdminMessages() {
    return AppAPI.init().get(Config.env.baseURL + '/admin/messages')
  },

  async getAdminComments() {
    return AppAPI.init().get(Config.env.baseURL + '/admin/comments')
  },

  async deleteMessageForAdmin(id: number) {
    return AppAPI.init().delete(Config.env.baseURL + `/admin/messages/${id}`)
  },

  async deleteCommentForAdmin(id: number) {
    return AppAPI.init().delete(Config.env.baseURL + `/admin/comments/${id}`)
  },

  async updateMessageForAdmin(message: MessageForEditType) {
    return AppAPI.init().put(
      Config.env.baseURL + `/admin/messages/${message.id}`,
      {
        message: {
          messageText: message.messageText,
          sharedStatus: message.sharedStatus,
        },
      }
    )
  },

  async updateCommentForAdmin({ id, commentText }: Record<string, string>) {
    return AppAPI.init().put(Config.env.baseURL + `/admin/comments/${id}`, {
      comment: { commentText },
    })
  },
}

export default AppAPI

import { fetchUserProfileWatcher } from './fetchUserProfile'
import { loginWatcher } from './login'
import { logoutWatcher } from './logout'
import { createMessageWatcher } from './createMessages'
import { fetchMyMessagesWatcher } from './fetchMyMessages'
import { fetchSharedMessagesWatcher } from './fetchSharedMessages'
import { deleteMessageWatcher } from './deleteMessage'
import { editMessageWatcher } from './editMessage'
import { updateMessageWatcher } from './updateMessage'

export default [
  fetchUserProfileWatcher,
  loginWatcher,
  logoutWatcher,
  createMessageWatcher,
  fetchMyMessagesWatcher,
  fetchSharedMessagesWatcher,
  deleteMessageWatcher,
  editMessageWatcher,
  updateMessageWatcher,
]

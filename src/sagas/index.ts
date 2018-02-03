import {
  fetchUserProfileWatcher
} from './fetchUserProfile';

import {
  tokenDataWatcher
} from './tokenData';

import {
  createMessageWatcher
} from './createMessages';

import {
  fetchMyMessagesWatcher
} from './fetchMyMessages';

import {
  sharedMessagesWatcher
} from './sharedMessages';

import {
  deleteMessageWatcher
} from './deleteMessage';

import {
  editMessageWatcher
} from './editMessage';

import {
  updateMessageWatcher
} from './updateMessage';

export default [
  fetchUserProfileWatcher,
  tokenDataWatcher,
  createMessageWatcher,
  fetchMyMessagesWatcher,
  sharedMessagesWatcher,
  deleteMessageWatcher,
  editMessageWatcher,
  updateMessageWatcher
];

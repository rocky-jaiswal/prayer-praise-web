import { Dispatch as ReduxDispatch, Action } from 'redux'
import { PrayerPraise, ShareStatus, LocaleEnum } from './enums'
import { Immutable } from 'seamless-immutable'

export interface ActionType<T> {
  type: string
  payload?: T
}

export type Auth0Params = {
  audience: string
  clientID: string
  domain: string
  redirectUri: string
  responseType: string
  scope: string
}

export type AppStateType = {
  jwtToken?: string | null
  error?: string | null
  locale: LocaleEnum
  profilePic?: string | null
  sidebarVisible: boolean
  username?: string
  admin: boolean
}

export type MessagesStateType = {
  messageType: PrayerPraise
  messageText: string
  sharedStatus: ShareStatus
  loading: boolean
  error?: string
  displayMessage?: string
}

export type SharedMessageType = {
  id: number
  messageType: PrayerPraise
  messageText: string
  sharedStatus: ShareStatus
  username: string
  agreements: number
}

export type SharedMessagesType = {
  displayMessage?: string
  error?: string
  expandedMessage?: number
  loading: boolean
  messages: SharedMessageType[]
  currentPage: number
  size: number
  totalElements: number
  totalPages: number
}

export type MessageForEditType = {
  id?: number
  messageText?: string
  sharedStatus?: ShareStatus
  messageType?: PrayerPraise
}

export type MyDataType = {
  displayMessage?: string
  error?: string
  loading: boolean
  myMessages: SharedMessageType[]
  messageForEdit: MessageForEditType
  selectedMessageId: number | null
}

export type RootStateType = {
  app: AppStateType
  messages: MessagesStateType
  sharedMessages: Immutable<SharedMessagesType>
  myData: Immutable<MyDataType>
  router?: any
}

export type Dispatch = ReduxDispatch<Action>

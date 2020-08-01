import { Dispatch as ReduxDispatch, Action } from 'redux'
import { PrayerPraise, ShareStatus, LocaleEnum } from './enums'
import { Immutable } from 'seamless-immutable'

export interface ActionType<T> {
  type: string
  payload?: T
}

interface Auth0 {
  audience: string
  clientID: string
  domain: string
  redirectUri: string
  responseType: string
  scope: string
}

export type Auth0Params = Auth0

interface AppState {
  jwtToken?: string | null
  error?: string | null
  locale: LocaleEnum
  profilePic?: string | null
  sidebarVisible: boolean
  username?: string
  admin: boolean
}
export type AppStateType = AppState

interface MessagesState {
  messageType: PrayerPraise
  messageText: string
  sharedStatus: ShareStatus
  loading: boolean
  error?: string
  displayMessage?: string
}
export type MessagesStateType = MessagesState

interface SharedMessage {
  id: number
  messageType: PrayerPraise
  messageText: string
  sharedStatus: ShareStatus
  shortUsername: string
  username: string
}

export type SharedMessageType = SharedMessage

interface SharedMessages {
  displayMessage?: string
  error?: string
  expandedMessage?: number
  loading: boolean
  messages: SharedMessage[]
  currentPage: number
  size: number
  totalElements: number
  totalPages: number
}

export type SharedMessagesType = SharedMessages

interface MessageForEdit {
  id?: number
  text?: string
  sharedStatus?: ShareStatus
  messageType?: PrayerPraise
}

export type MessageForEditType = MessageForEdit

interface MyData {
  displayMessage?: string
  error?: string
  loading: boolean
  myMessages: SharedMessage[]
  messageForEdit: MessageForEdit
  selectedMessageId: number | null
}

export type MyDataType = MyData

interface RootState {
  app: AppState
  messages: MessagesState
  sharedMessages: Immutable<SharedMessages>
  myData: Immutable<MyData>
  router?: any
}

export type RootStateType = RootState

export type Dispatch = ReduxDispatch<Action>

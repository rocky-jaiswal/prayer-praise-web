import * as Immutable from 'seamless-immutable'
import { LOCATION_CHANGE } from 'connected-react-router'

import { ActionType } from '../constants/types'

const istate = {
  locationBeforeTransitions: null,
}

export const initialState = Immutable.from(istate)

export function routeReducer(
  state: any = initialState,
  action: ActionType<any>
) {
  switch (action.type) {
    case LOCATION_CHANGE:
      return state.merge({
        locationBeforeTransitions: action.payload,
      })

    default:
      return state
  }
}

import * as React from 'react'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'
import { PrayerPraise } from '../../constants/enums'
import { ImmutableObject } from 'seamless-immutable'

import { ActionType, SharedMessageType } from '../../constants/types'
import cleanString from '../../utils/cleanString'
import Badge from './Badge'
import './styles.css'

interface Props {
  message: ImmutableObject<SharedMessageType>
  hideCommentsLink?: boolean
  expand?(id?: number): ActionType<number>
  incrementAgreements(id: number): ActionType<number>
}

const ExpandedMessage = (props: Props) => {
  return (
    <div
      className="expanded-message"
      onClick={() => props.expand && props.expand(props.message.id)}
    >
      <Badge messageType={props.message.messageType} />
      <div className="expanded-user-name">{props.message.username}</div>
      <div className="expanded-message-text">
        {cleanString(props.message.messageText)}
      </div>
      <div className="expanded-links">
        <button
          onClick={(e) => {
            e.stopPropagation()
            props.incrementAgreements(props.message.id)
          }}
        >
          <span role="img" aria-label="agree">
            {`${props.message.agreements} `}
            {props.message.messageType === PrayerPraise.PRAYER ? '🙏' : '🙌'}
          </span>
        </button>
        {!props.hideCommentsLink && (
          <Link to={`/shared/${props.message.id}`} className="comments-link">
            <FormattedMessage id="components.Message.comments" />
          </Link>
        )}
      </div>
    </div>
  )
}

export default ExpandedMessage

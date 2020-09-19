import * as React from 'react'
import ContentEditable from 'react-contenteditable'
import { FormattedMessage } from 'react-intl'

import { ActionType } from '../../constants/types'
import { PrayerPraise, ShareStatus } from '../../constants/enums'
import cleanString from '../../utils/cleanString'
import DisplayMessage from '../DisplayMessage'
import SelectBar from '../SelectBar'
import './styles.css'

interface Props {
  formType: PrayerPraise
  displayMessage?: string
  loggedIn: boolean
  messageText?: string
  sharedStatus?: ShareStatus
  handleChangeMessageText(text: string): void
  handleChangeShareStatus(status: ShareStatus): ActionType<ShareStatus>
  handleSubmit(): ActionType<void>
}

const SubmissionForm = (props: Props) => {
  const getMessage = (formType: PrayerPraise) => {
    return {
      [PrayerPraise.PRAISE]: (
        <FormattedMessage id="component.FormHeading.Praise" />
      ),
      [PrayerPraise.PRAYER]: (
        <FormattedMessage id="component.FormHeading.Prayer" />
      ),
    }[formType]
  }

  const submitMessage = (e: any) => {
    e.preventDefault()
    if (props.messageText && props.messageText.trim().length !== 0) {
      props.handleSubmit()
    }
  }

  return (
    <div className="formContainer">
      <h3>{getMessage(props.formType)}</h3>
      <div className={'info'}>
        {`${cleanString(props.messageText).length} / 500`}
        <FormattedMessage id="component.form.characters" />
      </div>
      <DisplayMessage message={props.displayMessage} />
      <ContentEditable
        className="contentHolder"
        onChange={(evt: any) => props.handleChangeMessageText(evt.target.value)}
        html={props.messageText}
        disabled={false}
      />
      <SelectBar
        loggedIn={props.loggedIn}
        sharedStatus={props.sharedStatus}
        handleChangeShareStatus={(status: ShareStatus) =>
          props.handleChangeShareStatus(status)
        }
      />
      <button
        disabled={
          cleanString(props.messageText).trim().length === 0 ||
          cleanString(props.messageText).length > 500
        }
        className={
          cleanString(props.messageText).trim().length === 0 ||
          cleanString(props.messageText).length > 500
            ? 'disabledButton'
            : 'submitButton'
        }
        onClick={(e) => submitMessage(e)}
      >
        <FormattedMessage id="actions.submit" />
      </button>
    </div>
  )
}

export default SubmissionForm

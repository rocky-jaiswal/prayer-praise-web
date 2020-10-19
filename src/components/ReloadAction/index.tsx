import * as React from 'react'

import { ReactComponent as ReloadIcon } from './reload.svg'
import './styles.css'

interface Props {
  action(): void
}

const ReloadAction = (props: Props) => {
  return (
    <div>
      <button
        className="reload-action"
        onClick={() => props.action()}
        aria-label="reload"
      >
        <ReloadIcon />
      </button>
    </div>
  )
}

export default ReloadAction

import * as React from 'react'

import './styles.css'

class LoadingSpinner extends React.PureComponent {
  render() {
    return (
      <div className={'spinnerWrapper'}>
        <div className={'spinner'} />
      </div>
    )
  }
}

export default LoadingSpinner

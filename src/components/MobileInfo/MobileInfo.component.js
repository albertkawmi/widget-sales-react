import React from 'react'
import './MobileInfo.css'

// TODO save dismissed state to localStorage
class MobileInfo extends React.Component {
  state = { dismissed: false }

  render() {
    const { dismissed } = this.state
    const className = `mobile-info ${dismissed ? 'dismissed' : ''}`
    return (
      <div {...this.props} className={className}>
        <div className="mobile-info__text">
          This app is tricky to use on smaller screens. You can scroll (or swipe) the table around to see more data. Tapping a row will select a client and show their sales data beneath the table.
        </div>
        <button
          className="mobile-info__dismiss"
          onClick={() => this.setState({ dismissed: true })}
        >
          OK, got it.
        </button>
      </div>
    )
  }
}

export default MobileInfo

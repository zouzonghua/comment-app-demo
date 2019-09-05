import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { connect } from '../ReactRedux'

export default class ThemeSwitch extends Component {
  static propTypes = {
    themeColor: PropTypes.string,
    onSwitchColor: PropTypes.func
  }

  handleSwitchColor (color) {
    if (this.props.onSwitchColor) {
      this.props.onSwitchColor(color)
    }
  }

  render () {
    return (
      <div>
        <button
          onClick={() => this.handleSwitchColor('red')}
          style={{ color: this.props.themeColor }}
        >
        Red
        </button>
        <button
          onClick={() => this.handleSwitchColor('blue')}
          style={{ color: this.props.themeColor }}
        >
         Blue
        </button>
      </div>
    )
  }
}

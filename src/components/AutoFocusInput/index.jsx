import React, { Component } from 'react'

export default class AutoFocusInput extends Component {
  componentDidMount () {
    this.input.focus()
  }

  render () {
    return (
      <div>
        <input ref={(input) => this.input = input} />
      </div>
    )
  }
}

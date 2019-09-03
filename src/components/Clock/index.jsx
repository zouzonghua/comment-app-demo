import React, { Component } from 'react'

export default class Clock extends Component {
  constructor () {
    super()
    this.state = {
      date: new Date()
    }
  }

  componentWillMount () {
    this.timer = setInterval(() => {
      this.setState({
        date: new Date()
      })
    }, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    const { date } = this.state
    return (
      <div>
        <h1>现在的时间是</h1>
        {date.toLocaleTimeString()}
      </div>
    )
  }
}

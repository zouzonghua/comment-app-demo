import React, { Component } from 'react'
import Header from '../Hander'
import Clock from '../Clock'
import AutoFocusInput from '../AutoFocusInput'

export default class Index extends Component {
  constructor () {
    super()
    this.state = {
      isShowHeader: true,
      isShowClock: true
    }
    this.handleShowOrHide = this.handleShowOrHide.bind(this)
  }

  handleShowOrHide () {
    this.setState({
      isShowHeader: !this.state.isShowHeader,
      isShowClock: !this.state.isShowClock
    })
  }

  render () {
    const { isShowHeader, isShowClock } = this.state
    return (
      <div>
        {isShowHeader ? <Header /> : null}
        {isShowClock ? <Clock /> : null}
        <button onClick={this.handleShowOrHide}>
          {isShowHeader ? '隐藏标题' : '显示标题'}
        </button>
        <AutoFocusInput />
      </div>
    )
  }
}

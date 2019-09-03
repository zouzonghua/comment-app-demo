import React, { Component } from 'react'

export default class Header extends Component {
  constructor () {
    super()
    console.log('construct')
  }

  // 挂载之前 render 方法之前
  componentWillMount () {
    console.log('component will mount')
  }

  // 挂载完成 插入 DOM 元素之后
  componentDidMount () {
    console.log('component did mount')
  }

  // 卸载 删除 DOM 元素之前
  componentWillUnmount () {
    console.log('component will unmount')
  }

  render () {
    return (
      <div>
        <h1 className='title'>React 小书</h1>
      </div>
    )
  }
}

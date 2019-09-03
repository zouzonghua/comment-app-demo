import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

export default class CommentApp extends Component {
  constructor () {
    super()
    this.state = {
      comments: []
    }
    this.handleSubmitComment = this.handleSubmitComment.bind(this)
  }

  handleSubmitComment (comment) {
    if (!comment) return
    if (!comment.username) return window.alert('请输入用户名！')
    if (!comment.content) return window.alert('请输入评论内容！')
    // 小提示：这里的代码直接往 state.comments 数组里面插入数据其实违反了 React.js 的 state 不可直接修改的原则 。
    this.state.comments.push(comment)
    this.setState({
      comment: this.state.comments
    })
  }

  render () {
    return (
      <div className='wrapper'>
        <CommentInput onSubmit={this.handleSubmitComment} />
        <CommentList comments={this.state.comments} />
      </div>
    )
  }
}

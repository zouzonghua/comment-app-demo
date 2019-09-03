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
    this.handleDeleteComment = this.handleDeleteComment.bind(this)
  }

  componentWillMount () {
    this._loadComments()
  }

  /**
   * 从浏览器 localStorage 获取评论
   */
  _loadComments () {
    let comments = window.localStorage.getItem('comments')
    if (comments) {
      comments = JSON.parse(comments)
      this.setState({ comments })
    }
  }

  /**
   * 保存评论数据到浏览器 localStorage
   * @param {Array} comments 评论数据集合
   */
  _saveComments (comments) {
    window.localStorage.setItem('comments', JSON.stringify(comments))
  }

  handleSubmitComment (comment) {
    if (!comment) return
    if (!comment.username) return window.alert('请输入用户名！')
    if (!comment.content) return window.alert('请输入评论内容！')
    // 小提示：这里的代码直接往 state.comments 数组里面插入数据其实违反了 React.js 的 state 不可直接修改的原则 。
    const { comments } = this.state
    comments.push(comment)
    this.setState({ comments })
    this._saveComments(comments)
  }

  handleDeleteComment (index) {
    const { comments } = this.state
    comments.splice(index, 1)
    this.setState({ comments })
    this._saveComments(comments)
  }

  render () {
    return (
      <div className='wrapper'>
        <CommentInput onSubmit={this.handleSubmitComment} />
        <CommentList
          comments={this.state.comments}
          onDeleteComment={this.handleDeleteComment}
        />
      </div>
    )
  }
}

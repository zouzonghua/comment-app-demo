import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Comment extends Component {
  static propTypes = {
    comment: PropTypes.object.isRequired,
    onDeleteComment: PropTypes.func,
    index: PropTypes.number
  }

  constructor () {
    super()
    this.state = {
      timeString: ''
    }
    this._updateTimeString = this._updateTimeString.bind(this)
    this.handleDeleteComment = this.handleDeleteComment.bind(this)
  }

  componentWillMount () {
    this._updateTimeString()
    this._timer = setInterval(() => {
      this._updateTimeString()
    }, 5000)
  }

  componentWillUnmount () {
    clearInterval(this._timer)
  }

  /**
   * 更新评论创建时间
   */
  _updateTimeString () {
    const { comment } = this.props
    const duration = (+Date.now() - comment.createdTime) / 1000
    this.setState({
      timeString: duration > 60
        ? `${Math.round(duration / 60)} 分钟前`
        : `${Math.round(Math.max(duration, 1))} 秒前`
    })
  }

  /**
   * 处理评论内容 用户在的输入内容中任何以 `` 包含的内容都会用 <code> 包含起来显示到页面上
   * @param {String} content 评论内容
   */
  _getProcessedContent (content) {
    return content
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;')
      .replace(/`([\S\s]+?)`/g, '<code>$1</code>')
  }

  handleDeleteComment () {
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(this.props.index)
    }
  }

  render () {
    const { username, content } = this.props.comment
    const { timeString } = this.state

    return (
      <div className='comment'>
        <div className='comment-user'>
          <span>{username}</span> ：
        </div>
        <p dangerouslySetInnerHTML={{ __html: this._getProcessedContent(content) }} />
        <span className='comment-createdtime'>
          {timeString}
        </span>
        <span
          onClick={this.handleDeleteComment}
          className='comment-delete'
        >
          删除
        </span>
      </div>
    )
  }
}
// Comment.propTypes = {
//   comment: PropTypes.object.isRequired
// }

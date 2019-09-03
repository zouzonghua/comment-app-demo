import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class CommentInput extends Component {
  static propTypes = {
    onSubmit: PropTypes.func
  }

  constructor () {
    super()
    this.state = {
      username: '',
      content: ''
    }
    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.handleContentChange = this.handleContentChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleUsernameBlur = this.handleUsernameBlur.bind(this)
  }

  componentDidMount () {
    this.textarea.focus()
    this._loadUsername()
  }

  /**
   * 保存用户名到浏览器 localStorage
   * @param {String} username 用户名
   */
  _saveUsername (username) {
    window.localStorage.setItem('username', username)
  }

  /**
   * 从浏览器 localStorage 获取用户名
   */
  _loadUsername () {
    const username = window.localStorage.getItem('username')
    if (username) {
      this.setState({ username })
    }
  }

  handleUsernameChange (e) {
    this.setState({
      username: e.target.value
    })
  }

  handleContentChange (e) {
    this.setState({
      content: e.target.value
    })
  }

  handleSubmit () {
    if (this.props.onSubmit) {
      const { username, content } = this.state
      this.props.onSubmit({ username, content, createdTime: +new Date() })
    }
    this.setState({ content: '' })
  }

  handleUsernameBlur (e) {
    this._saveUsername(e.target.value)
  }

  render () {
    return (
      <div className='comment-input'>

        <div className='comment-field'>
          <span className='comment-field-name'>用户名：</span>
          <div className='comment-field-input'>
            <input
              type='text'
              value={this.state.username}
              onBlur={this.handleUsernameBlur}
              onChange={this.handleUsernameChange}
            />
          </div>
        </div>

        <div className='comment-field'>
          <span className='comment-field-name'>评论内容：</span>
          <div className='comment-field-input'>
            <textarea
              // eslint-disable-next-line no-return-assign
              ref={(textarea) => this.textarea = textarea}
              value={this.state.content}
              onChange={this.handleContentChange}
            />
          </div>
        </div>

        <div className='comment-field-button'>
          <button onClick={this.handleSubmit}>
            发布
          </button>
        </div>

      </div>
    )
  }
}

// CommentInput.propTypes = {
//   onSubmit: PropTypes.func
// }

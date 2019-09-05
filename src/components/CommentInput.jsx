import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class CommentInput extends Component {
  static propTypes = {
    username: PropTypes.any,
    onSubmit: PropTypes.func,
    onUserNameInputBlur: PropTypes.func
  }

  static defaultProps = {
    username: ''
  }

  constructor (props) {
    super(props)
    this.state = {
      username: props.username,
      content: ''
    }
  }

  componentDidMount () {
    this.textarea.focus()
  }

  handleUsernameBlur (e) {
    if (this.props.onUserNameInputBlur) {
      this.props.onUserNameInputBlur(e.target.value)
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
      this.props.onSubmit({
        username,
        content,
        createdTime: +new Date()
      })
    }
    this.setState({ content: '' })
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
              onBlur={(e) => this.handleUsernameBlur(e)}
              onChange={(e) => this.handleUsernameChange(e)}
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
              onChange={(e) => this.handleContentChange(e)}
            />
          </div>
        </div>

        <div className='comment-field-button'>
          <button onClick={() => this.handleSubmit()}>
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

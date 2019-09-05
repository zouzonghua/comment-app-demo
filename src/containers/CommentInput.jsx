import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CommentInput from '../components/CommentInput'
import { addComment } from '../reducers/comments'

// CommentInputContainer
// 负责用户名到加载、保存，评论到发布
class CommentInputContainer extends Component {
  static propTypes = {
    comments: PropTypes.array,
    onSubmit: PropTypes.func
  }

  constructor () {
    super()
    this.state = { username: '' }
  }

  componentWillMount () {
    this._loadUsername()
  }

  /**
   * @description 从 LocalStorage 加载 username
   * @author zouzonghua
   * @Date 2019-09-05 15:49:22
   */
  _loadUsername () {
    // 然后可以在 render 方法中传给 CommentInput
    const username = window.localStorage.getItem('username')
    if (username) {
      this.setState({ username })
    }
  }

  /**
   * @description 保存 username 到 LocalStorage
   * @author zouzonghua
   * @param {String} username
   * @Date 2019-09-05 15:50:07
   */
  _saveUsername (username) {
    // 看看 render 方法的 onUserNameInputBlur
    // 这个方法会在用户名输入框 blur 的时候的被调用，保存用户名
    window.localStorage.setItem('username', username)
  }

  /**
   * @description 提交评论
   * @author zouzonghua
   * @param {Object} comment
   * @Date 2019-09-05 15:51:47
   */
  handleSubmitComment (comment) {
    // 评论数据到验证
    if (!comment) return
    if (!comment.username) return window.alert('请输入用户名')
    if (!comment.content) return window.alert('请输入评论内容')

    // 新增评论保存到 LocalStorage 中
    const { comments } = this.props
    const newComments = [...comments, comment]
    window.localStorage.setItem('comments', JSON.stringify(newComments))

    if (this.props.onSubmit) {
      this.props.onSubmit(comment)
    }
  }

  render () {
    return (
      <CommentInput
        username={this.state.username}
        onUserNameInputBlur={(e) => this._saveUsername(e)}
        onSubmit={(comment) => this.handleSubmitComment(comment)}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    comments: state.comments
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: comment => {
      dispatch(addComment(comment))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentInputContainer)

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Comment from './Comment'

export default class CommentList extends Component {
  static propTypes = {
    comments: PropTypes.array,
    onDeleteComment: PropTypes.func
  }

  constructor () {
    super()
    this.handleDeleteComment = this.handleDeleteComment.bind(this)
  }

  handleDeleteComment (index) {
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(index)
    }
  }

  render () {
    const { comments } = this.props
    return (
      <div>
        {comments.map((comment, i) =>
          <Comment
            comment={comment}
            key={i}
            index={i}
            onDeleteComment={this.handleDeleteComment}
          />
        )}
      </div>
    )
  }
}

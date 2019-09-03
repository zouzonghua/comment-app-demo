import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Comment from './Comment'

export default class CommentList extends Component {
  static defaultProps = {
    comments: []
  }

  render () {
    const { comments } = this.props
    return (
      <div>
        {comments.map((comment, i) =>
          <Comment comment={comment} key={i} />
        )}
      </div>
    )
  }
}
CommentList.propTypes = {
  comments: PropTypes.array
}

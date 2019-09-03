import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Comment extends Component {
  render () {
    const { username, content } = this.props.comment

    return (
      <div className='comment'>
        <div className='comment-user'>
          <span>{username}</span> ：
        </div>
        <p>{content}</p>
      </div>
    )
  }
}
Comment.propTypes = {
  comment: PropTypes.object
}

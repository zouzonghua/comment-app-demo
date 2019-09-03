import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export default class Card extends Component {
  // static propTypes = {
  //   content: PropTypes.String
  // }

  render () {
    const content =
      <div>
        <h2>React.js 小书</h2>
        <div>开源、免费、专业、简单</div>
      订阅：<input type='text' />
      </div>
    return (
      <div className='card'>
        <div className='card-content'>
          {content}
        </div>
      </div>
    )
  }
}
// Card.propTypes = {
//   content: PropTypes.string
// }

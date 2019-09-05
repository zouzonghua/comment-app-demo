// import React, { Component } from 'react'
// import PropTypes from 'prop-types'

// import ThemeSwitch from '../ThemeSwitch'

// export default class Content extends Component {
//   static contextTypes = {
//     store: PropTypes.object
//   }

//   constructor () {
//     super()
//     this.state = {
//       themeColor: ''
//     }
//   }

//   componentWillMount () {
//     const { store } = this.context
//     this._updateThemeColor()
//     store.subscribe(() => this._updateThemeColor())
//   }

//   _updateThemeColor () {
//     const { store } = this.context
//     const state = store.getState()
//     this.setState({
//       themeColor: state.themeColor
//     })
//   }

//   render () {
//     return (
//       <div style={{ color: this.state.themeColor }}>
//         React.js 小书内容
//         <ThemeSwitch />
//       </div>
//     )
//   }
// }
import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { connect } from '../ReactRedux'
import { connect } from 'react-redux'

import ThemeSwitch from '../../containers/ThemeSwitch'

let Content = class extends Component {
  static propTypes = {
    themeColor: PropTypes.string
  }

  render () {
    return (
      <div style={{ color: this.props.themeColor }}>
        React.js 小书内容
        <ThemeSwitch />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    themeColor: state.themeColor
  }
}

Content = connect(mapStateToProps)(Content)

export default Content

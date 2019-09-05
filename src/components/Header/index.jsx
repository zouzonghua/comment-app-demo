// import React, { Component } from 'react'

// export default class Header extends Component {

//   constructor () {
//     super()
//     console.log('construct')
//   }

//   // 挂载之前 render 方法之前
//   componentWillMount () {
//     console.log('component will mount')
//   }

//   // 挂载完成 插入 DOM 元素之后
//   componentDidMount () {
//     console.log('component did mount')
//   }

//   // 卸载 删除 DOM 元素之前
//   componentWillUnmount () {
//     console.log('component will unmount')
//   }

//   render () {
//     return (
//       <div>
//         <h1 className='title'>React 小书</h1>
//       </div>
//     )
//   }
// }

// import React, { Component } from 'react'
// import PropTypes from 'prop-types'

// export default class Header extends Component {
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
//       <div>

//         <h1 style={{ color: this.state.themeColor }}>React.js 小书</h1>
//       </div>
//     )
//   }
// }

// import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// // import { connect } from '../ReactRedux'
// import { connect } from 'react-redux'

// let Header = class extends Component {
//   static propTypes = {
//     themeColor: PropTypes.string
//   }

//   render () {
//     return (
//       <div>
//         <h1 style={{ color: this.props.themeColor }}>React.js 小书</h1>
//       </div>
//     )
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     themeColor: state.themeColor
//   }
// }

// Header = connect(mapStateToProps)(Header)

// export default Header

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Header extends Component {
  static propTypes = {
    themeColor: PropTypes.string
  }

  render () {
    return (
      <h1 style={{ color: this.props.themeColor }}>React.js 小书</h1>
    )
  }
}

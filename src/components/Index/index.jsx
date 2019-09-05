// import React, { Component } from 'react'
// import Header from '../Hander'
// import Clock from '../Clock'
// import AutoFocusInput from '../AutoFocusInput'

// export default class Index extends Component {
//   constructor () {
//     super()
//     this.state = {
//       isShowHeader: true,
//       isShowClock: true
//     }
//     this.handleShowOrHide = this.handleShowOrHide.bind(this)
//   }

//   handleShowOrHide () {
//     this.setState({
//       isShowHeader: !this.state.isShowHeader,
//       isShowClock: !this.state.isShowClock
//     })
//   }

//   render () {
//     const { isShowHeader, isShowClock } = this.state
//     return (
//       <div>
//         {isShowHeader ? <Header /> : null}
//         {isShowClock ? <Clock /> : null}
//         <button onClick={this.handleShowOrHide}>
//           {isShowHeader ? '隐藏标题' : '显示标题'}
//         </button>
//         <AutoFocusInput />
//       </div>
//     )
//   }
// }

// import React, { Component } from 'react'
// import PropTypes from 'prop-types'

// class Header extends Component {
//   render () {
//     return (
//       <div>
//         <h2>This is header</h2>
//         <Title />
//       </div>
//     )
//   }
// }

// class Main extends Component {
//   render () {
//     return (
//       <div>
//         <h2>This is main</h2>
//         <Content />
//       </div>
//     )
//   }
// }

// class Title extends Component {
//   static contextTypes = {
//     themeColor: PropTypes.string
//   }

//   render () {
//     return (
//       <h1 style={{ color: this.context.themeColor }}>React.js 小书标题</h1>
//     )
//   }
// }

// class Content extends Component {
//   static contextTypes = {
//     themeColor: PropTypes.string
//   }

//   render () {
//     return (
//       <div>
//         <h2 style={{ color: this.context.themeColor }}>React.js 小书内容</h2>
//       </div>
//     )
//   }
// }

// export default class Index extends Component {
//   static childContextTypes = {
//     themeColor: PropTypes.string
//   }

//   constructor () {
//     super()
//     this.state = {
//       themeColor: 'green'
//     }
//   }

//   getChildContext () {
//     return { themeColor: this.state.themeColor }
//   }

//   render () {
//     return (
//       <div>
//         <Header />
//         <Main />
//       </div>
//     )
//   }
// }

/**
 * 一个组件可以通过 getChildContext 方法返回一个对象，这个对象就是子树的 context，提供 context 的组件必须提供 childContextTypes 作为 context 的声明和验证。
 *
 * 如果一个组件设置了 context，那么它的子组件都可以直接访问到里面的内容，它就像这个组件为根的子树的全局变量。任意深度的子组件都可以通过 contextTypes 来声明你想要的 context 里面的哪些状态，然后可以通过 this.context 访问到那些状态。
 *
 * context 打破了组件和组件之间通过 props 传递数据的规范，极大地增强了组件之间的耦合性。而且，就如全局变量一样，context 里面的数据能被随意接触就能被随意修改，每个组件都能够改 context 里面的内容会导致程序的运行不可预料。
 *
 * 但是这种机制对于前端应用状态管理来说是很有帮助的，因为毕竟很多状态都会在组件之间进行共享，context 会给我们带来很大的方便。一些第三方的前端应用状态管理的库（例如 Redux）就是充分地利用了这种机制给我们提供便利的状态管理服务。但我们一般不需要手动写 context，也不要用它，只需要用好这些第三方的应用状态管理库就行了。
 *
 */

import React, { Component } from 'react'

import Header from '../../containers/Header'
import Content from '../../containers/Content'

export default class Index extends Component {
  render () {
    return (
      <div>
        <Header />
        <Content />
      </div>
    )
  }
}

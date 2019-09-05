import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

/**
 * 动手实现 Redux（一）：优雅地修改共享状态
 */
// const appState = {
//   title: {
//     text: 'React.js 小书',
//     color: 'red'
//   },
//   content: {
//     text: 'React.js 小书内容',
//     color: 'blue'
//   }
// }

// function dispatch (action) {
//   switch (action.type) {
//     case 'UPDATE_TITLE_TEXT':
//       appState.title.text = action.text
//       break
//     case 'UPDATE_TITLE_COLOR':
//       appState.title.color = action.color
//       break
//     default:
//       break
//   }
// }

// function renderApp (appState) {
//   renderTitle(appState.title)
//   renderContent(appState.content)
// }

// function renderTitle (title) {
//   const titleDOM = document.getElementById('title')
//   titleDOM.innerHTML = title.text
//   titleDOM.style.color = title.color
// }

// function renderContent (content) {
//   const contentDOM = document.getElementById('content')
//   contentDOM.innerHTML = content.text
//   contentDOM.style.color = content.color
// }

// renderApp(appState)
// dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《React.js 小书》' })
// dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'blue' })
// renderApp(appState)

/**
 * 动手实现 Redux（二）：抽离 store 和监控数据变化
 */
// const appState = {
//   title: {
//     text: 'React.js 小书',
//     color: 'red'
//   },
//   content: {
//     text: 'React.js 小书内容',
//     color: 'blue'
//   }
// }

// function stateChanger (state, action) {
//   switch (action.type) {
//     case 'UPDATE_TITLE_TEXT':
//       state.title.text = action.text
//       break
//     case 'UPDATE_TITLE_COLOR':
//       state.title.color = action.color
//       break
//     default:
//       break
//   }
// }

// function createStore (state, stateChanger) {
//   const listeners = []
//   // 传入监听函数
//   const subscribe = (listener) => listeners.push(listener)
//   const getState = () => state
//   const dispatch = (action) => {
//     stateChanger(state, action)
//     // 每次数据改变遍历数组执行监听函数渲染数据
//     listeners.forEach((listener) => {
//       listener()
//     })
//   }
//   return { getState, dispatch, subscribe }
// }

// function renderApp (appState) {
//   renderTitle(appState.title)
//   renderContent(appState.content)
// }

// function renderTitle (title) {
//   const titleDOM = document.getElementById('title')
//   titleDOM.innerHTML = title.text
//   titleDOM.style.color = title.color
// }

// function renderContent (content) {
//   const contentDOM = document.getElementById('content')
//   contentDOM.innerHTML = content.text
//   contentDOM.style.color = content.color
// }

// const store = createStore(appState, stateChanger)
// store.subscribe(() => renderApp(store.getState())) // 监听数据变化

// renderApp(store.getState()) // 首次渲染页面
// store.dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《React.js 小书》' })
// store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'blue' })
// store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'red' })

/**
 * 动手实现 Redux（三）：纯函数（Pure Function）简介
 */

/**
 * 不是纯函数
 * 不是一个纯函数，因为它返回的结果依赖于外部变量 a，我们在不知道 a 的值的情况下，并不能保证 foo(2) 的返回值是 3。
 */
// const a = 1
// const foo = (b) => a + b
// console.log(foo(2))

/**
 * 纯函数
 * 纯函数的第一个条件：一个函数的返回结果只依赖于它的参数。
 */
// const a = 1
// const foo = (x, b) => x + b
// console.log(foo(a, 2))

/**
 * 不是纯函数
 * 函数执行过程产生了副作用
 * 在 foo 内部加了一句 obj.x = 2，计算前 counter.x 是 1，但是计算以后 counter.x 是 2。foo 函数的执行对外部的 counter 产生了影响，它产生了副作用，因为它修改了外部传进来的对象，现在它是不纯的。
 */
// const foo = (obj, b) => {
//   obj.x = 2
//   return obj.x + b
// }

// const counter = { x: 1 }

// console.log(foo(counter, 2))
// console.log(counter.x)

/**
 * 纯函数
 * 函数执行过程没有副作用
 * 虽然 foo 函数内部修改了 obj，但是 obj 是内部变量，外部程序根本观察不到，修改 obj 并不会产生外部可观察的变化，这个函数是没有副作用的，因此它是一个纯函数。
 */

// const foo = (b) => {
//   const obj = { x: 1 }
//   obj.x = 2
//   return obj.x + b
// }

// console.log(foo(2))

// 一个函数的返回结果只依赖于它的参数，并且在执行过程里面没有副作用，我们就把这个函数叫做纯函数。

// 为什么要煞费苦心地构建纯函数？因为纯函数非常“靠谱”，执行一个纯函数你不用担心它会干什么坏事，它不会产生不可预料的行为，也不会对外部产生影响。不管何时何地，你给它什么它就会乖乖地吐出什么。如果你的应用程序大多数函数都是由纯函数组成，那么你的程序测试、调试起来会非常方便。

/**
 * 动手实现 Redux（四）：共享结构的对象提高性能
 */

// const appState = {
//   title: {
//     text: 'React.js 小书',
//     color: 'red'
//   },
//   content: {
//     text: 'React.js 小书内容',
//     color: 'blue'
//   }
// }

// function stateChanger (state, action) {
//   switch (action.type) {
//     case 'UPDATE_TITLE_TEXT':
//       return { // 构建新的对象并且返回
//         ...state,
//         title: {
//           ...state.title,
//           text: action.text
//         }
//       }
//       // state.title.text = action.text
//     case 'UPDATE_TITLE_COLOR':
//       return { // 构建新的对象并且返回
//         ...state,
//         title: {
//           ...state.title,
//           color: action.color
//         }
//       }
//     default:
//       return state // 没有修改，返回原来的对象
//   }
// }

// function createStore (state, stateChanger) {
//   const listeners = []
//   // 传入监听函数
//   const subscribe = (listener) => listeners.push(listener)
//   const getState = () => state
//   const dispatch = (action) => {
//     state = stateChanger(state, action) // 覆盖原对象
//     // 每次数据改变遍历数组执行监听函数渲染数据
//     listeners.forEach((listener) => {
//       listener()
//     })
//   }
//   return { getState, dispatch, subscribe }
// }

// function renderApp (newAppState, oldAppState = {}) { // 防止 oldAppState 没有传入，所以加了默认参数 oldAppState = {}
//   if (newAppState === oldAppState) return // 数据没有变化就不渲染
//   console.log('render app...')
//   renderTitle(newAppState.title, oldAppState.title)
//   renderContent(newAppState.content, oldAppState.content)
// }

// function renderTitle (newTitle, oldTitle) {
//   if (newTitle === oldTitle) return
//   console.log('render title...')
//   const titleDOM = document.getElementById('title')
//   titleDOM.innerHTML = newTitle.text
//   titleDOM.style.color = newTitle.color
// }

// function renderContent (newContent, oldContent) {
//   if (newContent === oldContent) return
//   console.log('render content...')
//   const contentDOM = document.getElementById('content')
//   contentDOM.innerHTML = newContent.text
//   contentDOM.style.color = newContent.color
// }

// const store = createStore(appState, stateChanger)
// let oldStore = store.getState() // 缓存旧的 state
// store.subscribe(() => {
//   const newStore = store.getState() // 数据可能变化，获取新的 state
//   renderApp(newStore, oldStore)// 把新旧的 state 传进去渲染
//   oldStore = newStore
// }) // 监听数据变化

// renderApp(store.getState()) // 首次渲染页面
// store.dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《React.js 小书》' })
// store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'blue' })

/**
 * 动手实现 Redux（五）：不要问为什么的 reducer
 */

// function stateChanger (state, action) {
//   if (!state) {
//     return {
//       title: {
//         text: 'React.js 小书',
//         color: 'red'
//       },
//       content: {
//         text: 'React.js 小书内容',
//         color: 'blue'
//       }
//     }
//   }
//   switch (action.type) {
//     case 'UPDATE_TITLE_TEXT':
//       return { // 构建新的对象并且返回
//         ...state,
//         title: {
//           ...state.title,
//           text: action.text
//         }
//       }
//     case 'UPDATE_TITLE_COLOR':
//       return { // 构建新的对象并且返回
//         ...state,
//         title: {
//           ...state.title,
//           color: action.color
//         }
//       }
//     default:
//       return state // 没有修改，返回原来的对象
//   }
// }

// function createStore (reducer) {
//   let state = null
//   const listeners = []
//   // 传入监听函数
//   const subscribe = (listener) => listeners.push(listener)
//   const getState = () => state
//   const dispatch = (action) => {
//     state = reducer(state, action) // 覆盖原对象
//     // 每次数据改变遍历数组执行监听函数渲染数据
//     listeners.forEach((listener) => {
//       listener()
//     })
//   }
//   dispatch({}) // 初始化 state
//   return { getState, dispatch, subscribe }
// }

// function renderApp (newAppState, oldAppState = {}) { // 防止 oldAppState 没有传入，所以加了默认参数 oldAppState = {}
//   if (newAppState === oldAppState) return // 数据没有变化就不渲染
//   console.log('render app...')
//   renderTitle(newAppState.title, oldAppState.title)
//   renderContent(newAppState.content, oldAppState.content)
// }

// function renderTitle (newTitle, oldTitle) {
//   if (newTitle === oldTitle) return
//   console.log('render title...')
//   const titleDOM = document.getElementById('title')
//   titleDOM.innerHTML = newTitle.text
//   titleDOM.style.color = newTitle.color
// }

// function renderContent (newContent, oldContent) {
//   if (newContent === oldContent) return
//   console.log('render content...')
//   const contentDOM = document.getElementById('content')
//   contentDOM.innerHTML = newContent.text
//   contentDOM.style.color = newContent.color
// }

// const store = createStore(stateChanger)
// let oldStore = store.getState() // 缓存旧的 state
// store.subscribe(() => {
//   const newStore = store.getState() // 数据可能变化，获取新的 state
//   renderApp(newStore, oldStore)// 把新旧的 state 传进去渲染
//   oldStore = newStore
// }) // 监听数据变化

// renderApp(store.getState()) // 首次渲染页面
// store.dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《React.js 小书》' })
// store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'blue' })

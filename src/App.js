import React from 'react'
// import './App.css'
// import CommentApp from './components/CommentApp'
// import Index from './components/Index'
// import { Provider } from './components/ReactRedux'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import CommentApp from './containers/CommentApp'
import comments from './reducers/comments'

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

// const themeReducer = (state, action) => {
//   if (!state) {
//     return {
//       themeColor: 'red'
//     }
//   }

//   switch (action.type) {
//     case 'CHANGE_COLOR':
//       return { ...state, themeColor: action.themeColor }
//     default:
//       return state
//   }
// }

// const store = createStore(themeReducer)
const store = createStore(comments)

function App () {
  return (
    <div className='App'>
      {/* <Provider store={store}>
        <Index />
      </Provider> */}
      {/* <CommentApp /> */}
      <Provider store={store}>
        <CommentApp />
      </Provider>
    </div>
  )
}

export default App

import {applyMiddleware, createStore as reduxCreateStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'

const reducer = (state, action) => {
  if (action.type === `INCREMENT`) {
    return Object.assign({}, state, {
      count: state.count + 1,
    })
  }
  return state
}

const initialState = { count: 0 }

const createStore = () => reduxCreateStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware())
)
export default createStore

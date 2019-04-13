import { ADD, MINUS } from './constants'

const INITIAL_STATE = {
  num: 0
}

export default function counter (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD:
      return {
        num: state.num + 1
      }
     case MINUS:
       return {
         num: state.num - 1
       }
     default:
       return state
  }
}

import {RECEIVE_CURRENT_USER, DESTROY_CURRENT_USER} from '../actions/session_actions';

const _nullUser = {
  id: null
};

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
    let userId= parseInt(Object.keys(action.currentUser))
    return {id: userId}
    case DESTROY_CURRENT_USER:
    return _nullUser;
    default:
    return state;

  }
}

export default sessionReducer;

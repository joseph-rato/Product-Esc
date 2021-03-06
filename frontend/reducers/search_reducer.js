import {combineReducers} from 'redux';

import searchUserReducer from './search_user_reducer'
import searchProductReducer from './search_product_reducer'
import searchTagReducer from './search_tag_reducer'

export default combineReducers({
  user: searchUserReducer,
  product: searchProductReducer,
  tags: searchTagReducer
})



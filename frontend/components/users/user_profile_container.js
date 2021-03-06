import {connect} from 'react-redux';
import {fetchUser} from '../../actions/user_actions'
import UserProfile from './user_profile'


const mapStateToProp = (state, ownProps) => {
  return({
    userProfileId: ownProps.match.params.Id || state.session.id,
    users: state.entities.users,
  });
}

const mapDispatchToProp = (dispatch) => {
  return({
    fetchUser: (userId) => dispatch(fetchUser(userId))
  })
}

export default connect(mapStateToProp, mapDispatchToProp)(UserProfile)

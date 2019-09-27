import { connect } from 'react-redux';
import Navbar from './Navbar.styled';
import * as userSelector from '../../../state/User/selectors';
import { setProject, reset } from '../../../state/User/actionCreators';

const mapStateToProps = state => ({
  user: userSelector.getUser(state),
});

const mapDispatchToProps = dispatch => ({
  setProject: project => dispatch(setProject(project)),
  reset: () => dispatch(reset()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navbar);

import { connect } from 'react-redux';
import Navbar from './Navbar.styled';
import * as userSelector from '../../../state/User/selectors';
import { setProject } from '../../../state/User/actionCreators';

const mapStateToProps = state => ({
  user: userSelector.getUser(state),
});

const mapDispatchToProps = dispatch => ({
  setProject: project => dispatch(setProject(project)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navbar);

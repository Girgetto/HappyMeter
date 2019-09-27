import { connect } from 'react-redux';
import Home from './Home.styled';
import * as userSelector from '../../../state/User/selectors';

const mapStateToProps = state => ({
  user: userSelector.getUser(state),
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

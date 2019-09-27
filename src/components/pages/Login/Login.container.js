import { connect } from 'react-redux';
import Login from './Login.styled';
import { login } from '../../../state/User/actionCreators';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  login: (credentials) => dispatch(login(credentials)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);

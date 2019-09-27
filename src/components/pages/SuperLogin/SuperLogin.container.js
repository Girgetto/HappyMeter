import { connect } from 'react-redux';
import SuperLogin from './SuperLogin.component';
import { login } from '../../../state/User/actionCreators';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  login: (credentials) => dispatch(login(credentials)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SuperLogin);

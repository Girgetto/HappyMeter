import { handleActions } from 'redux-actions';
import initialState from './initial.state';
import * as actions from './actionCreators';

const user = handleActions(
  {
    [actions.setUser]: (state, { payload: { user: { email, role, id, name } } }) => ({ ...state, email, role, id, name }),
    [actions.setProject]: (state, { payload: { project } }) => ({ ...state, project }),
  },
  initialState,
);

export default user;

import { handleActions } from 'redux-actions';
import initialState from './initial.state';
import * as actions from './actionCreators';

const user = handleActions(
  {
    [actions.setUser]: (state, { payload: { user: { email, role, id, name, logo, projects_id: projects } } }) => ({ ...state, email, role, id, name, logo, projects }),
  },
  initialState,
);

export default user;

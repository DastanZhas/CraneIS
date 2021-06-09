import { combineReducers } from 'redux';
import cranes from './cranes';
import errors from './errors';
import messages from './messages';
import auth from './auth';

export default combineReducers({
    cranes,
    errors,
    messages,
    auth
});
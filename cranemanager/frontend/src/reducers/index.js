import { combineReducers } from 'redux';
import cranes from './cranes';
import errors from './errors';
import messages from './messages';

export default combineReducers({
    cranes,
    errors,
    messages
});
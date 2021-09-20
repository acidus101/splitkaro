import {combineReducers} from "redux";
import groupMembersReducer from './groupMembersReducer';
import indiviualMembersReducer from './individualMembersReducer';

const reducers = combineReducers({
    members: groupMembersReducer,
    ind: indiviualMembersReducer
})

export default reducers;
import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './Reducers';

export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsLoading
});

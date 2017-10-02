import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => {
    //return function to have redux-thunk use dispact function
    //normally would just return object, but thunk will see function
    //and apply middleware
    return function(dispatch) {
        axios.get('/api/current_user')
            .then(res => dispatch({type: FETCH_USER, payload: res.data}));
    }
};
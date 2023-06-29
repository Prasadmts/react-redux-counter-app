import {createStore} from 'redux'
import counterReducers from './reducers/CounterReducers';

const store = createStore(counterReducers);

export default store;

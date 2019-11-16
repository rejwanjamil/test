import { LOAD_DATA } from './actionTypes';
import data from '../../data';

const loadData = data => dispatch => {
	const promise = new Promise(function(resolve, reject) {
		setTimeout(() => resolve(data), 9000);
	});
	promise.then(data => {
		dispatch(LOAD_DATA(data));
	});
};

loadData(data);

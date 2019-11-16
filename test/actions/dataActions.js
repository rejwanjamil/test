import { LOAD_DATA } from './actionTypes';
import data from '../../data';

export const loadData = data => dispatch => {
	const promise = new Promise(function(resolve, reject) {
		setTimeout(() => resolve(data), 9000);
	});
	promise.then(data => {
		dispatch({
			type: LOAD_DATA,
			payload: data
		});
	});
};

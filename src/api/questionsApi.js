import { constructUrl } from '../utils/constructUrl';

async function questionsApi(filters, page, limit, signal) {
	const url = constructUrl(filters, page, limit);
	console.log(url);
	const res = await fetch(url, {signal});
	if(!res.ok) {
		throw new Error('Failed to fetch questions');
	}
	const data = await res.json();
	// console.log(data);
	return data;
}

export default questionsApi;
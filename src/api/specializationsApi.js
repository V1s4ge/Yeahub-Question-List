import BASE_URL from './url';

async function specializationsApi(limit) {

	const res = await fetch(`${BASE_URL}specializations?page=1&limit=${limit}`);
	if(!res.ok) {
		throw new Error('Failed to fetch questions');
	}
	const data = await res.json();
	return data.data;
}

export default specializationsApi;
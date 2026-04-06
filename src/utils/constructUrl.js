import BASE_URL from '../api/url';


export function constructUrl(filters, page, limit) {
	const params = new URLSearchParams({ page, limit });

	if (filters.inputValue)       params.set('titleOrDescription', filters.inputValue);
	if (filters.skills.length)    params.set('skills', filters.skills.join(','));
	if (filters.difficulty.length) params.set('complexity', filters.difficulty.join(','));
	if (filters.rate.length)      params.set('rate', filters.rate.join(','));
	if (filters.specialization)   params.set('specializationId', filters.specialization);

	return `${BASE_URL}questions/public-questions?${params}`;
}
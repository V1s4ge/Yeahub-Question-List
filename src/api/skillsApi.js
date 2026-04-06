import BASE_URL from './url';

async function skillsApi(specialization, skillLimit) {

	const res = await fetch(`${BASE_URL}skills?page=1&limit=${skillLimit}&specializations=${specialization}`);
	if(!res.ok) {
		throw new Error('Failed to fetch questions');
	}
	const data = await res.json();
	const validSkills = data.data.map(skill => ({
		title: skill.title, id: skill.id, image: skill.imageSrc
	}));
	return validSkills;
}

export default skillsApi;
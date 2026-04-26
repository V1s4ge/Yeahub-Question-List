import { useState, useEffect, useCallback } from 'react';
import skillsApi from '../api/skillsApi';
import specializationsApi from '../api/specializationsApi';

function useFilterData(specId) {

	const [specializations, setSpecializations] = useState([]);
	const [skillsList, setSkillsList] = useState([]);
	const [showAllSpecs, setShowAllSpecs] = useState(false);
	const [showAllSkills, setShowAllSkills] = useState(false);

	const specLimit = showAllSpecs  ? 100 : 5;
	const skillLimit = showAllSkills ? 100 : 5;

	useEffect(() => {
		async function getAllSpecializations() {
			try {
				const data = await specializationsApi(specLimit);
				setSpecializations(data);
			} catch(e) {
				console.log(e);
			}
		}
		getAllSpecializations();
	}, [showAllSpecs]);

	useEffect(() => {
		if (!specId) return;
		async function getAllSkillsForSpecialization() {
			try {
				const data = await skillsApi(specId, skillLimit);
				setSkillsList([...data]);
			} catch(e) {
				console.log(e);
			}
		}
		getAllSkillsForSpecialization();
	}, [specId, showAllSkills]);


	const handleShowAllSkills = useCallback(() => setShowAllSkills(prev => !prev), []);
	const handleShowAllSpecs  = useCallback(() => setShowAllSpecs(prev => !prev), []);

	return { 
		specializations, 
		skillsList, 
		showAllSpecs, 
		showAllSkills, 
		handleShowAllSkills, 
		handleShowAllSpecs 
	};

}

export default useFilterData;
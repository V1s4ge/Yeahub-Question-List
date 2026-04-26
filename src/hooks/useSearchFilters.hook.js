import { useSearchParams } from 'react-router-dom';
import { useCallback } from 'react';
import raitingOptions from '../utils/raitingOprions';
import difficultyOptions from '../utils/difficultyOptions';

function getNumberArray(params, key) {
	return params.getAll(key).map(Number);
}

function useSearchFilters() {

	const [searchParams, setSearchParams] = useSearchParams();
    
	const inputVal = searchParams.get('search') ?? '';
	const specId = Number(searchParams.get('specialization') ?? 11);
	const skills = getNumberArray(searchParams, 'skills');
	const difficulty = getNumberArray(searchParams, 'difficulty');
	const rate = getNumberArray(searchParams, 'rate');
	const page = Number(searchParams.get('page') ?? 1);

	const updateParams = useCallback((updates) => {
		setSearchParams(prev => {
			const next = new URLSearchParams(prev);
			Object.entries(updates).forEach(([key, value]) => {
				next.delete(key);
				if (Array.isArray(value)) {
					value.forEach(v => next.append(key, v));
				} else if (value !== null && value !== undefined && value !== '') {
					next.set(key, value);
				}
			});
			return next;
		});
            
	}, [setSearchParams]);

	const handleSpecializationChange = useCallback((spec) => {
		updateParams({ ...spec, skills: [], page: null });
	}, [updateParams]);

	const handleSkillsChange = useCallback((skillId) => {
		const next = skills.includes(skillId)
			? skills.filter(s => s !== skillId)
			: [...skills, skillId];
		updateParams({ skills: next, page: null });
	}, [skills, updateParams]);

	const handleDifficultyChange = useCallback((diffId) => {
		const option = difficultyOptions.find(d => d.id === diffId);
		if (!option) return;
		const isSelected = option.value.some(v => difficulty.includes(v));
		const next = isSelected
			? difficulty.filter(d => !option.value.includes(d))
			: [...difficulty, ...option.value];
		updateParams({ difficulty: next, page: null });
	}, [difficulty, updateParams]);

	const handleRateChange = useCallback((rateId) => {
		const option = raitingOptions.find(r => r.id === rateId);
		if (!option) return;
		const next = rate.includes(option.value)
			? rate.filter(r => r !== option.value)
			: [...rate, option.value];
		updateParams({ rate: next, page: null });
	}, [rate, updateParams]);

	const handlePageChange = useCallback((newPage) => {
		updateParams({ page: newPage });
	}, [updateParams]);


	const handleInputChange = useCallback((e) => {
		updateParams({search: e.target.value, page: null});
	}, [updateParams]); 


	const filters ={
		inputVal,
		specId,
		skills,
		difficulty,
		rate,
		page
	};

	const handlers = {
		handleSpecializationChange,
		handleSkillsChange,
		handleDifficultyChange,
		handleRateChange,
		handlePageChange,
		handleInputChange
        
	};

	return {
		filters,
		handlers
	};

}

export default useSearchFilters;
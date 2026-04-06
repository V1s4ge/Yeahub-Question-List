import styles from './QuestionPage.module.css';
import QuestionsList from '../../components/QuestionsList/QuestionsList';
import QuestionSearchPanel from '../../components/QuestionSearchPanel/QuestionSearchPanel';
import { useCallback, useEffect, useState } from 'react';
import questionsApi from '../../api/questionsApi';
import skillsApi from '../../api/skillsApi';
import specializationsApi from '../../api/specializationsApi';
import useDebounce from '../../hooks/useDebounce.hook';
import difficultyOptions from '../../utils/difficultyOptions';
import raitingOptions from '../../utils/raitingOprions';

function QuestionPage() {

	const [questions, setQuestions] = useState([]);
	const [filters, setFilters] = useState({
		inputValue: '',
		specialization: 11,
		skills: [],
		difficulty: [],
		rate: []
		
	});

	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const [inputVal, setInputVal] = useState('');
	const debouncedInput = useDebounce(inputVal, 300);

	const [specializations, setSpecializations] = useState([]);
	const [showAllSpecs, setShowAllSpecs] = useState(false);

	const [skills, setSkills] = useState([]);
	const [showAllSkills, setShowAllSkills] = useState(false);
	
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);

	const limit = 10;
	const specLimit = showAllSpecs ? 100 : 5;
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

		if(!filters.specialization) return;
		
		async function getAllSkillsForSpecialization() {
			try {
				const data = await skillsApi(filters.specialization, skillLimit);
			    setSkills([...data]);
			} catch(e) {
				console.log(e);
			}
		};
		getAllSkillsForSpecialization();

	}, [filters.specialization, showAllSkills, skillLimit]);

	useEffect(() => {
		const controller = new AbortController();
		console.log(filters.skills);
		async function getQuestions() {
			setIsLoading(true);
			setError(null);
			try { 
				const actualFilters = { ...filters, inputValue: debouncedInput };
				console.log('url filters:', actualFilters);
				const data = await questionsApi(actualFilters, page, limit, controller.signal);
				setQuestions([...data.data]);
				setTotalPages(Math.ceil(data.total / limit) || 1);
			} catch(e) {
				if (e.name === 'AbortError') return;
				setError('Не удалось загрузить вопросы');
			} finally {
				setIsLoading(false);
			}
		};

		getQuestions();

		return () => controller.abort();

	}, [filters, page, debouncedInput]);
	
	const handleSpecializationChange = useCallback((spec) => {
		setFilters(prev => {return {...prev, skills: [], ...spec};});
		setPage(1);
	}, []);

	const handleSkillsChange = useCallback((skillId) => {
		setFilters(prev => ({
			...prev,
			skills: prev.skills.includes(skillId)
				? prev.skills.filter(s => s !== skillId)
				: [...prev.skills, skillId]
		}));
		setPage(1);
	}, []);

	const handleDifficultyChange = useCallback((diffId) => {
		const option = difficultyOptions.find(d => d.id === diffId);
		if (!option) return;

		setFilters(prev => {
			const isSelected = prev.difficulty.includes(option.value[0]) || 
                           prev.difficulty.includes(option.value[1]);

			return {
				...prev,
				difficulty: isSelected
					? prev.difficulty.filter(d => !option.value.includes(d))
					: [...prev.difficulty, ...option.value]
			};
		});
		setPage(1);
	}, []);

	const handleRateChange = useCallback((rateId) => {
		const option = raitingOptions.find(r => r.id === rateId);
		if (!option) return;

		setFilters(prev => ({
			...prev,
			rate: prev.rate.includes(option.value)
				? prev.rate.filter(r => r !== option.value)
				: [...prev.rate, option.value]
		}));
		setPage(1);
	}, []);

	const handleShowAllSkills = useCallback(() => {
		setShowAllSkills(prev => !prev);
	}, []);

	const handleShowAllSpecs = useCallback(() => {
		setShowAllSpecs(prev => !prev);
	}, []);

	return (
		<div className={styles.pageContainer}>
		    <QuestionsList 
				specialization={specializations.find(s => s.id === filters.specialization)}  
				questions = {questions} 
				page = {page} 
				totalPages={totalPages} 
				onPageChange={setPage}
				isLoading={isLoading}
				error={error}
			/>
			<QuestionSearchPanel 
				onInputChange={(e) => setInputVal(e.target.value)}
				inputValue={inputVal}
				onShowAllSpecs={handleShowAllSpecs}
				onShowAllSkills={handleShowAllSkills}
				showAllSpecs={showAllSpecs}
				showAllSkills={showAllSkills}
				specializations = {specializations} 
				skills={skills}  
				filters={filters}
				onSpecChange={handleSpecializationChange}
				onSkillChange={handleSkillsChange}
				onDifficultyChange={handleDifficultyChange}
				onRaitingChange={handleRateChange}
			/>
		</div>
	);
}

export default QuestionPage;
import styles from './QuestionPage.module.css';
import QuestionsList from '../QuestionsList/QuestionsList';
import QuestionSearchPanel from '../QuestionSearchPanel/QuestionSearchPanel';
import { useCallback, useEffect, useState } from 'react';
import BASE_URL from '../../url';
import { constructUrl } from '../../constructUrl';

function QuestionPage() {

	const [questions, setQuestions] = useState([]);
	const [filters, setFilters] = useState({
		inputValue: '',
		specialization: 11,
		skills: [],
		difficulty: [],
		rate: []
		
	});
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
				const res = await fetch(`${BASE_URL}specializations?page=1&limit=${specLimit}`);
				if(!res.ok) {
					throw new Error('Failed to fetch');
				}
				const data = await res.json();
		
				setSpecializations([...data.data]);
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
				const res = await fetch(`${BASE_URL}skills?page=1&limit=${skillLimit}&specializations=${filters.specialization}`);
				if(!res.ok) {
					throw new Error('Failed to fetch Skills');
				}
				const data = await res.json();
				const validSkills = data.data.map(skill => ({
					title: skill.title, id: skill.id, image: skill.imageSrc
				}));
				
			    setSkills([...validSkills]);
			} catch(e) {
				console.log(e);
			}
		};
		getAllSkillsForSpecialization();

	}, [filters.specialization, showAllSkills]);


	useEffect(() => {
		setPage(1);
	}, [filters]);

	useEffect(() => {
		const controller = new AbortController();
		async function getQuestions() {
			
			try {
				const url = constructUrl(filters, page, limit);
				console.log(url);
				const res = await fetch(url);
				if(!res.ok) {
					throw new Error('Failed to fetch questions');
				}
				const data = await res.json();

				setQuestions([...data.data]);
				setTotalPages(Math.ceil(data.total / limit) || 1);
			} catch(e) {
				console.log(e);
			}

		};

		getQuestions();

		return () => controller.abort();

	}, [filters, page]);

	const handleFiltersChange = useCallback((filter) => {
		setFilters(prev => {return {...prev, ...filter};}); 
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
			/>
			<QuestionSearchPanel 
				onShowAllSpecs={handleShowAllSpecs}
				onShowAllSkills={handleShowAllSkills}
				showAllSpecs={showAllSpecs}
				showAllSkills={showAllSkills}
				specializations = {specializations} 
				skills={skills}  
				filters={filters}
				onFiltersChange={handleFiltersChange}
			/>
		</div>
	);
}

export default QuestionPage;
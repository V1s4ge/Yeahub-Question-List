import { useState, useEffect } from 'react';
import questionsApi from '../api/questionsApi';
import useDebounce from './useDebounce.hook';

function useQuestionsLoader(filters) {

	const [questions, setQuestions] = useState([]);
	const [totalPages, setTotalPages] = useState(1);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const {inputVal, specId, skills, difficulty, rate, page} = filters;
	const debouncedInput = useDebounce(inputVal, 300);
	const limit = 10;

	useEffect(() => {
	    const controller = new AbortController();
		async function getQuestions() {
			setIsLoading(true);
			setError(null);
			try {
				const filters = { inputValue: debouncedInput, specialization: specId, skills, difficulty, rate };
				const data = await questionsApi(filters, page, limit, controller.signal);
				setQuestions([...data.data]);
				setTotalPages(Math.ceil(data.total / limit) || 1);
			} catch(e) {
				if (e.name === 'AbortError') return;
				setError('Не удалось загрузить вопросы');
			} finally {
				setIsLoading(false);
			}
		}
		getQuestions();
		return () => controller.abort();
	}, [debouncedInput, specId, JSON.stringify(skills), JSON.stringify(difficulty), JSON.stringify(rate), page]);



	return {questions, totalPages, isLoading, error};
}

export default useQuestionsLoader;
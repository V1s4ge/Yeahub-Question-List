import styles from './Input.module.css';
import { useMemo, useState, useEffect } from 'react';
import debounce from 'lodash.debounce';

function Input({onChange}) {

	const [query, setQuery] = useState('');

	const makeRequest = useMemo(() => 
		debounce((query) => {
			console.log(query);
			onChange({inputValue: query});
		}, 300), [onChange]);

	useEffect(() => {
		return () => {
			makeRequest.cancel(); 
		};
	}, [makeRequest]);
	
	const hangeInputChange = (e) => {
		const {value} = e.target; 	
		makeRequest(value);
		setQuery(value);
	};

	return (
		
		<input 
			className={styles.input}  
			type="text" 
			name="question-request" 
			id="question-request" 
			placeholder='Введите запрос...'
			value={query}
			onChange={hangeInputChange}
		/>
		
	);
}

export default Input;
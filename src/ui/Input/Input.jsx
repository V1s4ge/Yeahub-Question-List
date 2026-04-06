import styles from './Input.module.css';
// import { useMemo, useState, useEffect } from 'react';
// import debounce from 'lodash.debounce';

function Input({onChange, value}) { 

	return (
		
		<input 
			className={styles.input}  
			type="text" 
			name="question-request" 
			id="question-request" 
			placeholder='Введите запрос...'
			value={value}
			onChange={onChange}
		/>
		
	);
}

export default Input;
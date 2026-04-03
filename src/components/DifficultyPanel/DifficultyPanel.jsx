import SearchButton from '../SearchButton/SearchButton';
import styles from './DifficultyPanel.module.css';

function DifficultyPanel({ options,  selectedDifficulty, onChange}) {

	
	const handleDiffBtnClick = (e) => {

		const difficultyId = Number(e.target.dataset.btnId);
		let diffValue = options.find(d => {
			if (d.id === difficultyId) {
				return d.value;
			}
		});

		const valueOfDifficut = [...diffValue.value];
		let updatedDifficulties;

		if (selectedDifficulty.includes(valueOfDifficut[0]) || selectedDifficulty.includes(valueOfDifficut[1])) {

			updatedDifficulties = selectedDifficulty.filter(df => (df !== valueOfDifficut[0] && df !== valueOfDifficut[1]));

		} else {
			updatedDifficulties = [...selectedDifficulty, ...valueOfDifficut];
		}
		
		onChange({difficulty: [...updatedDifficulties]});
		
		e.stopPropagation();
	};

	return (
		<>
			<p className={styles.difficultyPanelContainer__header}>Сложность</p>
			<div onClick={handleDiffBtnClick}  className={styles.difficultyPanelContainer}>
				{options && options.map(d => {
					return <SearchButton key={d.id} isActive={selectedDifficulty.includes(d.value[0]) || selectedDifficulty.includes(d.value[1])}  id={d.id}  > {d.diff} </SearchButton>;
				})}
			</div>
		</>
		
	);
}

export default DifficultyPanel;
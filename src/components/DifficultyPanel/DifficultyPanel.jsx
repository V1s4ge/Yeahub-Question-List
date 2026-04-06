import SearchButton from '../../ui/SearchButton/SearchButton';
import styles from './DifficultyPanel.module.css';

function DifficultyPanel({ options,  selectedDifficulty, onChange}) { 

	
	const handleDiffBtnClick = (e) => {

		const difficultyId = Number(e.target.dataset.btnId);
		if(!difficultyId) return;
		
		onChange({difficulty: difficultyId});
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
import styles from './SpecializationPanel.module.css';
import SearchButton from '../SearchButton/SearchButton';
import { memo } from 'react';
function SpecializationPanel({onShowAllSpecs, showAllSpecs, onChange, options, selectedSpecialization}) {

	const handleSpecializationBtnClick = (e) => {
		const spec = e.target.closest('[data-btn-id]');
		
		if(!spec) return;
		
		const specId = Number(spec.dataset.btnId);
		
		if(selectedSpecialization === specId) {
			return;
		} else {
			onChange({specialization: specId, skills: []});
		}
		e.stopPropagation();
	};

	return (
		<>
			<div onClick={handleSpecializationBtnClick}>
				<p className={styles.specializationPanelContainer__header}>Специализация</p>
				<div className={styles.specializationPanelContainer}>
					{options && options.map(spec => {
						return <SearchButton isActive={selectedSpecialization === spec.id}  key={spec.id} id={spec.id}> {spec.title} </SearchButton>;
					})}
				</div>
			</div>
			<SearchButton  onClick={onShowAllSpecs}> {showAllSpecs ? 'Скрыть' : 'Посмотреть все'}</SearchButton>
		</>
		
		
	);
}

export default memo(SpecializationPanel);
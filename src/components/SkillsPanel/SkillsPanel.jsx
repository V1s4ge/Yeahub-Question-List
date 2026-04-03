import styles from './SkillsPanel.module.css';
import SearchButton from '../SearchButton/SearchButton';
import { memo } from 'react'; 

function SkillsPanel({options, selectedSkills,  onChange, showAllSkills, onShowAllSkills}) {

	const handleSkillBtnClick = (e) => {
		const skill = e.target.closest('[data-btn-id]');
		const skillId = Number(skill.dataset.btnId);
		
		let updatedSkills;
		
		if(selectedSkills.includes(skillId)) {
			
			updatedSkills = selectedSkills.filter(skill => skill !== skillId);
		} else {
			updatedSkills = [...selectedSkills, skillId];
			
		}
		
		onChange({skills: updatedSkills});
		e.stopPropagation();
	};

	return (
		<>
			<div onClick={handleSkillBtnClick}>
				<p className={styles.skillsPanelContainer__header}>Навыки</p>
				<div className={styles.skillsPanelContainer}>
					{options && options.map(skill => {
						return <SearchButton isActive={selectedSkills.includes(skill.id)} img={skill?.image}  key={skill.id} id={skill.id}>  {skill.title} </SearchButton>;
					})}
				</div>
			</div>
			<SearchButton  onClick={onShowAllSkills}> {showAllSkills ? 'Скрыть' : 'Посмотреть все'}</SearchButton>
		</>
		
	);
}

export default memo(SkillsPanel);
import styles from './SkillsPanel.module.css';
import SearchButton from '../../ui/SearchButton/SearchButton';
import { memo } from 'react'; 

function SkillsPanel({options, selectedSkills,  onChange=null, showAllSkills, onShowAllSkills}) {

	const handleSkillBtnClick = (e) => {
		const skill = e.target.closest('[data-btn-id]');
		if (!skill || !onChange) return;
		const skillId = Number(skill.dataset.btnId);
		onChange(skillId);
		e.stopPropagation();
	};

	return (
		<>
			<div onClick={handleSkillBtnClick}>
				<p className={styles.skillsPanelContainer__header}>Навыки</p>
				<div className={styles.skillsPanelContainer}>
					{options && options.map(skill => {
						return <SearchButton 
							isActive={selectedSkills ? selectedSkills.includes(skill.id) : false}   
							key={skill.id} 
							id={skill.id}>  {skill.title} </SearchButton>;
					})}
				</div>
			</div>
			{options.length > 5 ? <SearchButton  onClick={onShowAllSkills}> {showAllSkills ? 'Скрыть' : 'Посмотреть все'}</SearchButton> : ''}
		</>
		
	);
}

export default memo(SkillsPanel);
import styles from './SkillsPanel.module.css';
import SearchButton from '../../ui/SearchButton/SearchButton';
import { memo } from 'react'; 

function SkillsPanel({options, selectedSkills,  onChange, showAllSkills, onShowAllSkills}) {

	const handleSkillBtnClick = (e) => {
		const skill = e.target.closest('[data-btn-id]');
		if (!skill) return;
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
						return <SearchButton isActive={selectedSkills.includes(skill.id)}   key={skill.id} id={skill.id}>  {skill.title} </SearchButton>;
					})}
				</div>
			</div>
			<SearchButton  onClick={onShowAllSkills}> {showAllSkills ? 'Скрыть' : 'Посмотреть все'}</SearchButton>
		</>
		
	);
}

export default memo(SkillsPanel);
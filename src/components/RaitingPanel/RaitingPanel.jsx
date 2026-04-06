import SearchButton from '../../ui/SearchButton/SearchButton';
import styles from './RaitingPanel.module.css';

function RaitingPanel({options, selectedRate, onChange}) {

	const handleRateBtnClick = (e) => {

		const btn = e.target.closest('[data-btn-id]');
		if (!btn) return;
		const id = Number(btn.dataset.btnId);
		onChange(id);
		e.stopPropagation();
	};

	return (
		<div onClick={handleRateBtnClick}>
			<p className={styles.raitingPanelContainer__header}>Рейтинг</p>
			<div   className={styles.raitingPanelContainer}>
				{options && options.map(r => {
					return <SearchButton id={r.id} isActive={selectedRate.includes(r.value)}  key={r.id}>{r.rating}</SearchButton>;
				})}
			</div>
		</div>
		
	);
}

export default RaitingPanel;
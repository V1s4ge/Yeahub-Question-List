import SearchButton from '../SearchButton/SearchButton';
import styles from './RaitingPanel.module.css';

function RaitingPanel({options, selectedRate, onChange}) {

	const handleRateBtnClick = (e) => {

		const rate = e.target.closest('[data-btn-id]');

		if(!rate) return;

		const rateId = Number(rate.dataset.btnId);
		
		let updatedRaitings;
		let findRateValue = options.find(r => r.id === rateId);
	
		const rateValue = findRateValue.value;
		
		updatedRaitings = selectedRate.includes(rateValue) ? selectedRate.filter(r => r !== rateValue) : [...selectedRate, rateValue];
		
		onChange({rate: [...updatedRaitings]});
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
import styles from './SearchButton.module.css';

function SearchButton({cn, children, id, isActive, img, onClick}) {
	return (
		<button onClick={onClick}  data-btn-id = {id} className={`${styles.button} ${ isActive ? styles.active : ''} ${cn || ''}`}>
			{img ? <img className={styles.skillIcon} src={img} alt='icon'/> : ''}
			{children}
		</button>
	);
}

export default SearchButton;
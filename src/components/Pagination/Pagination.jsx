import styles from './Pagination.module.css';
import getPages from '../../getPages';
import { memo } from 'react';

function Pagination({page, totalPages, onPageChange}) {

	const pages = getPages(totalPages);

	return (
		<div className={styles.paginationContainer}>
			<button 
				className={styles.arrowBtn}
				onClick={() => onPageChange(page - 1)} 
				disabled={page===1}
			>
				<img className={styles.arrowIcon}  src="../public/arrow-left.png" alt="Назад" />
			</button>
			{pages.map(p => (
				<button 
					className={`
						${styles.paginationContainer__button} 
						${page === p ? styles.paginationContainer__button_active : ''}
					`}
					key={p} 
					onClick={() => onPageChange(p)} 
				>
					{p}
				</button>
			))}
			<button 
				className={styles.arrowBtn}
				onClick={() => onPageChange(page + 1)} 
				disabled={page===totalPages}
			>
				<img className={styles.arrowIcon} src="../public/arrow-right.png" alt="Назад" />
			</button>
		</div>
	);
};

export default memo(Pagination);
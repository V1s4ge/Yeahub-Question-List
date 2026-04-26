import styles from  './Header.module.css';
import { Link } from 'react-router-dom';

function Header() {

	return (
		<header className={styles.header}>
			<div className={styles.headerContainer}>
				<div className={styles.headerContainer__logo}>
					<img src="/logo.svg" alt="Logo" />
					<nav className={styles.headerContainer__links}>
						<Link to="/">База вопросов</Link>
						<a href="#">Тренажёр</a>
						<a href="#">Материалы</a>    
						<a href="#">Навыки (hh)</a>
					</nav>
				</div>
				<div>
					<button>Вход</button> {/* Эти кнопки будут компонентами*/}
					<button>Регистрация</button>
				</div>
			</div>
		</header>
	);
}

export default Header;
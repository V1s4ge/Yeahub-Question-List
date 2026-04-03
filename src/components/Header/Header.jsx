import styles from  './Header.module.css';

function Header() {

	return (
		<header>
			<div className={styles.headerContainer}>
				<div className={styles.headerContainer__logo}>
					<img src="/logo.svg" alt="Logo" />
					<nav className={styles.headerContainer__links}>
						<a href="#">База вопросов</a>
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
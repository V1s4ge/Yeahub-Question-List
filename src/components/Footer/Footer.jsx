import styles from './Footer.module.css';

function Footer() {
	return (
		<footer className={styles.footer}>
			<p className={styles.logo}>Yeahub</p>
			<p className={styles.tagline}>Выбери, каким будет IT завтра, вместе с нами</p>
			<p className={styles.desc}>
                YeaHub — это полностью открытый проект, призванный объединить и улучшить IT-сферу.
                Наш исходный код доступен для просмотра на GitHub. Дизайн проекта также открыт для ознакомления в Figma.
			</p>

			<hr className={styles.divider} />

			<div className={styles.bottom}>
				<div className={styles.left}>
					<span className={styles.copy}>© 2024 YeaHub</span>
					<a href="#" className={styles.docLink}>Документы</a>
				</div>
				<div className={styles.right}>
					<span className={styles.socialLabel}>Ищите нас в других соцсетях @yeahub_it</span>
					<div className={styles.icons}>
						{/* иконки */}
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
import { Link } from 'react-router-dom';

function NotFoundPage() {
	return (
		<div>Данной страницы не существует. <Link to="/"> Вернуться на главную страницу</Link></div>
	);
}

export default NotFoundPage;
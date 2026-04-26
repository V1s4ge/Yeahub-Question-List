import { useRouteError } from 'react-router-dom';

function ErrorPage() {
	const error = useRouteError();

	return (
		<div>
			<h1>{error.status}</h1>
			<h2>{error.statusText || ''}</h2>
		</div>
	);
}

export default ErrorPage;
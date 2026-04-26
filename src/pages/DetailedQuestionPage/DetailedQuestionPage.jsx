import { useLoaderData, Link } from 'react-router-dom';
import { Suspense} from 'react';
import Question from '../../components/Question/Question';
import QuestionShortAnswer from '../../components/QuestionShortAnswer/QuestionShortAnswer';
import DetailedQuestionShortAnswer from '../../components/DetailedQuestionShortAnswer/DetailedQuestionShortAnswer';
import BASE_URL from '../../api/url';
import styles from './DetailedQuestionPage.module.css';
import DetailedQuestionLongAnswer from '../../components/DetailedQuestionLongAnswer/DetailedQuestionLongAnswer';
import DetailedQuestionSideBar from '../../components/DetailedQuestionSideBar/DetailedQuestionSideBar';
import DetailedQuestionContent from '../../components/DetailedQuestionContent/DetailedQuestionContent';
import LoadingPage from '../../ui/LoadingPage/LoadingPage';

function DetailedQuestionPage() {
	const {question} = useLoaderData();
	console.log(question);
	return (
		<>
			<div className={styles.detailedQuestionPageContainer}>
				<Suspense fallback={<LoadingPage />}>
					<DetailedQuestionContent questionToLoad={question} />
					<DetailedQuestionSideBar questionsInfo={question} />
				</Suspense>
			</div>
		</>
		
	);

} 

async function getDetailedQuestionLoader(id) {
	
	const res = await fetch(`${BASE_URL}questions/public-questions/${id}`);
	if(!res.ok) {
		throw new Response('', { status: res.status, statusText: 'Failed to fetch question' });
	}
	return res.json();
	
}

export function detailedQuestionLoader({params}) {
	const id = params.id;
	return {
		question: getDetailedQuestionLoader(id)
	};
}

export default DetailedQuestionPage;
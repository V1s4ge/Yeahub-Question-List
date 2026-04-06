import { useState } from 'react';
import Question from '../Question/Question';
import styles from'./QuestionsList.module.css';
import Pagination from '../../ui/Pagination/Pagination';


function QuestionsList({questions, page, totalPages, onPageChange, specialization, isLoading, error}) {
	
	const [showAnswerId, setShowAnswerId] = useState(null);

	const handleQuestionClick = (e) => {
		const questionItem = e.target.closest('[data-question-id]');
		if(!questionItem) {
			return;
		}

		const questionId = Number(questionItem.dataset.questionId);
		setShowAnswerId(showAnswerId === questionId ? null : questionId);
		
	};

	return (
		
		<div onClick={handleQuestionClick} className={styles.questionListContainer}>
			<h1>Вопросы по {specialization?.title ?? ''}</h1>

			{isLoading && <p>Загрузка</p>}
			{error && <p>{}error</p>}

			{!isLoading && !error && (
				<>
					{questions.length
						? questions.map(q => (
							<Question isOpen={showAnswerId === q.id} key={q.id} {...q} />
						))
						: <p>Нет вопросов</p>
					}
					<Pagination
						page={page}
						totalPages={totalPages}
						onPageChange={onPageChange}
					/>
				</>
			)}
			
		</div>
			
		
		
	);
}

export default QuestionsList;
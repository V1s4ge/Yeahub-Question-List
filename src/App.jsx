// import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import QuestionPage from './components/QuestionPage/QuestionPage';

function App() {

	// const questionsApi = 'https://api.yeatwork.ru/questions/public-questions';

	return (
		<>
			<Header/>
			<QuestionPage/>
			<Footer/>
		</>
	);
}

export default App;

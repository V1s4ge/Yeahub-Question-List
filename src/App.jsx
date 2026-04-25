// import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import QuestionPage from './pages/QuestionPage/QuestionPage';
import Layout from './ui/Layout/Layout';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import DetailedQuestionPage, { detailedQuestionLoader } from './pages/DetailedQuestionPage/DetailedQuestionPage';

const router = createBrowserRouter(createRoutesFromElements(
	<Route path='/' element={<Layout />}>
		<Route index element={<QuestionPage />} />
		<Route path='question/:id' element={<DetailedQuestionPage />} loader={detailedQuestionLoader}/>
		<Route path='*' element={<NotFoundPage />}/>
	</Route >
));

function App() {

	// const questionsApi = 'https://api.yeatwork.ru/questions/public-questions';

	return (
		<>
			{/* <Header/>
			<QuestionPage/>
			<Footer/> */}
			<RouterProvider router={router} />
		</>
	);
}

export default App;

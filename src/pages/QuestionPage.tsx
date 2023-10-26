import { useState } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';
import style from '../styles/style';

import QuestionsDatas from '../stores/Question/QuestionDatas';
import Header from '../components/Header';
import useHeaderh from '../hooks/useHeaderh';

type TtotalScore = {
	id: number;
	score: number;
	type: string;
};
const QuestionPage = () => {
	const { headerHeight, headerRef } = useHeaderh();
	const navigate = useNavigate();
	const [questionNo, setQuestionNo] = useState(0);
	const [totalScore, setTotalScore] = useState([
		{ id: 1, score: 0, type: 'F' },
		{ id: 0, score: 0, type: 'T' },
	]);

	const handelClickAnswer = (ans: number) => {
		const newScore = totalScore.map(curScore =>
			curScore.id === ans
				? { id: curScore.id, score: curScore.score + 1, type: curScore.type }
				: curScore,
		);
		setTotalScore(newScore);
		// 마지막 문제가 아닐경우
		if (QuestionsDatas.length !== questionNo + 1) {
			setQuestionNo(questionNo + 1);
		} else {
			let mbti: TtotalScore[] | string = totalScore.filter(curScore => curScore.score > 5);
			if (!mbti.length) {
				mbti = 'TF';
			} else {
				mbti = mbti[0].type;
			}
			navigate({
				pathname: '/result',
				search: `?${createSearchParams({
					mbti,
				})}`,
			});
		}
	};

	return (
		<style.Wrapper $full>
			<Header
				type="progress"
				questionNo={questionNo}
				len={QuestionsDatas.length}
				ref={headerRef}
			/>
			<style.Contents $headerH={headerHeight}>
				<style.Title>{QuestionsDatas[questionNo].title}</style.Title>
				<style.ButtonGroup>
					<style.AnswerButton onClick={() => handelClickAnswer(1)}>
						{QuestionsDatas[questionNo].answera}
					</style.AnswerButton>
					<style.AnswerButton onClick={() => handelClickAnswer(0)}>
						{QuestionsDatas[questionNo].answerb}
					</style.AnswerButton>
				</style.ButtonGroup>
			</style.Contents>
		</style.Wrapper>
	);
};

export default QuestionPage;

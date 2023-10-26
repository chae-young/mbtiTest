import { useNavigate, useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import style from '../styles/style';
import ResultDatas from '../stores/Result/ResultDatas';
import useHeaderh from '../hooks/useHeaderh';

const ResultPage = () => {
	const navigate = useNavigate();
	const { headerHeight, headerRef } = useHeaderh();
	const [searchParams] = useSearchParams();
	const mbti = searchParams.get('mbti');
	const testResult = ResultDatas.find(type => type.mbti === mbti);

	const handleReset = () => {
		navigate('/question');
	};

	return (
		<>
			<style.Wrapper>
				<Header ref={headerRef} />
				<style.Contents $headerH={headerHeight}>
					<style.ResultTitle>당신은...대왕 {testResult?.mbti}</style.ResultTitle>
					<img src={testResult?.image} alt={testResult?.mbti} />
					<style.Desc>{testResult?.desc}</style.Desc>
					<style.EtcButton>
						<button onClick={handleReset}>테스트 다시하기</button>
						<button onClick={handleReset}>공유하기</button>
					</style.EtcButton>
				</style.Contents>
			</style.Wrapper>
		</>
	);
};

export default ResultPage;

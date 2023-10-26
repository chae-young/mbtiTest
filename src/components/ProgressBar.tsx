import styled from 'styled-components';

const Container = styled.div`
	position: relative;
	width: 100%;
	background-color: #333;
`;
const Bar = styled.div<{ $percent: number }>`
	display: flex;
	justify-content: center;
	align-items: center;
	width: ${props => props.$percent}%;
	height: 40px;
	background-color: #ffff66;
	color: #de38c8;
	font-weight: 800;
	font-size: 20px;
	transition: width 0.5s ease;
`;
const BarPercent = styled.span`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
`;

interface ProgressBarPRops {
	questionNo: number;
	len: number;
}

const ProgressBar = ({ questionNo, len }: ProgressBarPRops) => {
	const percent = (questionNo / len) * 100;
	return (
		<Container>
			<Bar $percent={percent}>
				<BarPercent>{percent}%</BarPercent>
			</Bar>
		</Container>
	);
};

export default ProgressBar;

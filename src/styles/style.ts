import styled from 'styled-components';

const Wrapper = styled.div<{ $full?: boolean }>`
	min-width: 360px;
	margin: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: ${props => (props.$full ? '100vh' : 'auto')};
	color: #fff;
	background-color: #000;
`;

const Header = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	margin: auto;
	width: auto;
	font-size: 40px;
	text-align: center;
	background-color: #b76cfd;
`;
const Title = styled.h1`
	padding: 20px;
	font-size: 20px;
	font-weight: 800;
`;
const ResultTitle = styled.h2`
	padding: 20px;
	text-align: center;
	font-size: 30px;
`;
const LogoImage = styled.div``;
const Desc = styled.p`
	padding: 20px;
`;

const Contents = styled.section<{ $headerH: number }>`
	padding-top: ${props => props.$headerH}px;
	text-align: center;
	> img {
		max-width: 100%;
	}
`;

const ButtonGroup = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	gap: 15px;
`;
const AnswerButton = styled.button`
	background: none;
	color: #fff;
`;
const Button = styled.button`
	padding: 5px 20px;
	background-color: var(--color-point);
	height: 40px;
	font-weight: 800;
`;
const EtcButton = styled.div`
	margin-bottom: 80px;

	button {
		padding: 5px 20px;
		border-radius: 10px;
		background: var(--color-point);
		font-size: 12px;
		font-weight: 800;
	}
	button + button {
		margin-left: 10px;
		background: #fcf330;
	}
`;

const style = {
	Wrapper,
	Header,
	Title,
	LogoImage,
	Desc,
	Button,
	ButtonGroup,
	AnswerButton,
	Contents,
	ResultTitle,
	EtcButton,
};

export default style;

import { useNavigate } from 'react-router-dom';
import style from '../styles/style';
import MainIMage from '../assets/main.webp';
import Header from '../components/Header';
import useHeaderh from '../hooks/useHeaderh';

const MainPage = () => {
	const navigate = useNavigate();
	const { headerRef, headerHeight } = useHeaderh();

	const handelClickButton = () => {
		navigate('/question');
	};

	return (
		<style.Wrapper $full>
			<Header ref={headerRef} />
			<style.Contents $headerH={headerHeight}>
				<style.Title>너..T야?</style.Title>
				<style.LogoImage>
					<img src={MainIMage} width={375} height={200} />
				</style.LogoImage>
				<style.Desc>나는 대왕 F일까 대왕 T일까..?</style.Desc>
				<style.Button onClick={handelClickButton}>감별하러 가기</style.Button>
			</style.Contents>
		</style.Wrapper>
	);
};

export default MainPage;

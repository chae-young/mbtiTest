import { useEffect } from 'react';
import { Iresult } from '../stores/Result/types';
import style from '../styles/style';

const { Kakao } = window as any;

interface KaKaoShareButtonProps {
	data: Iresult;
}

const KaKaoShareButton = ({ data }: KaKaoShareButtonProps) => {
	const url = 'https://mbti-test-eta.vercel.app';
	const resultUrl = window.location.href;

	useEffect(() => {
		if (!Kakao.isInitialized()) Kakao.init(import.meta.env.VITE_KAKAOAPI);
	}, []);

	const shareKaKao = () => {
		Kakao.Share.sendDefault({
			objectType: 'feed',
			content: {
				title: 'T 감별기',
				description: `${data.name}`,
				imageUrl: `${url} + ${data.image}`,
				link: {
					mobileWebUrl: resultUrl,
					webUrl: resultUrl,
				},
			},
			social: {
				likeCount: 10,
				commentCount: 20,
				sharedCount: 30,
			},
			buttons: [
				{
					title: '나도 테스트하러가기',
					link: {
						mobileWebUrl: url,
						webUrl: url,
					},
				},
			],
		});
	};

	return <button onClick={shareKaKao}>공유하기</button>;
};

export default KaKaoShareButton;

import { forwardRef } from 'react';
import style from '../styles/style';
import ProgressBar from './ProgressBar';

interface HeaderProps {
	type?: string;
	questionNo?: number;
	len?: number;
}

const Header = forwardRef<HTMLDivElement, HeaderProps>(({ type, questionNo = 0, len = 0 }, ref) => (
	// const Header = ({ type, questionNo = 0, len = 0 }: HeaderProps) => (
	<style.Header ref={ref}>
		{type === 'progress' ? <ProgressBar questionNo={questionNo} len={len} /> : '🔎 T 감별기'}
	</style.Header>
));

export default Header;

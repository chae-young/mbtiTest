import { useEffect, useRef, useState } from 'react';

const useHeaderh = () => {
	const headerRef = useRef<HTMLDivElement>(null);
	const [headerHeight, setHeaderHeight] = useState(0);
	useEffect(() => {
		console.log(headerRef?.current!.offsetHeight);
		setHeaderHeight(headerRef?.current!.offsetHeight);
	}, [headerHeight]);

	return { headerRef, headerHeight };
};

export default useHeaderh;

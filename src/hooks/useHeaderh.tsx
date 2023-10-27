import { useEffect, useRef, useState } from 'react';

const useHeaderh = () => {
	const headerRef = useRef<HTMLDivElement>(null);
	const [headerHeight, setHeaderHeight] = useState(0);
	useEffect(() => {
		setHeaderHeight(headerRef?.current!.offsetHeight);
	}, [headerHeight]);

	return { headerRef, headerHeight };
};

export default useHeaderh;

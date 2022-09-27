import React from 'react';
import classNames from 'classnames';

export const iconPaths = {
	check: 'M5 13l4 4L19 7',
	chevronDown: 'M19 9l-7 7-7-7',
	chevronLeft: 'M15 19l-7-7 7-7',
	chevronRight: 'M9 5l7 7-7 7',
	chevronRightBold: 'M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z',
	settings: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4',
	refresh: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
	arrowDown: 'M19 14l-7 7m0 0l-7-7m7 7V3',
	arrowDownBold: 'M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z',
	arrowRight: 'M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3',
	arrowRightSmall: 'M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z',
	arrowRightBold: 'M11.92 6.62019C11.8724 6.49743 11.801 6.38529 11.71 6.29019L6.71 1.29019C6.61676 1.19695 6.50607 1.12299 6.38425 1.07253C6.26243 1.02207 6.13186 0.996094 6 0.996094C5.7337 0.996094 5.4783 1.10188 5.29 1.29019C5.19676 1.38342 5.1228 1.49411 5.07234 1.61594C5.02188 1.73776 4.99591 1.86833 4.99591 2.00019C4.99591 2.26649 5.1017 2.52188 5.29 2.71019L8.59 6.00019H1C0.734784 6.00019 0.48043 6.10554 0.292893 6.29308C0.105357 6.48062 0 6.73497 0 7.00019C0 7.2654 0.105357 7.51976 0.292893 7.70729C0.48043 7.89483 0.734784 8.00019 1 8.00019H8.59L5.29 11.2902C5.19627 11.3831 5.12188 11.4937 5.07111 11.6156C5.02034 11.7375 4.9942 11.8682 4.9942 12.0002C4.9942 12.1322 5.02034 12.2629 5.07111 12.3848C5.12188 12.5066 5.19627 12.6172 5.29 12.7102C5.38296 12.8039 5.49356 12.8783 5.61542 12.9291C5.73728 12.9798 5.86799 13.006 6 13.006C6.13201 13.006 6.26272 12.9798 6.38458 12.9291C6.50644 12.8783 6.61704 12.8039 6.71 12.7102L11.71 7.71019C11.801 7.61508 11.8724 7.50294 11.92 7.38019C12.02 7.13672 12.02 6.86365 11.92 6.62019Z',
	search: 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z',
	searchBold: 'M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z',
	info: 'M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z',
	infoSolid: 'M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z'
};

export interface IconProps extends React.SVGAttributes<SVGElement> {
	iconName: keyof typeof iconPaths;
	className?: string;
	height?: string;
	width?: string;
}

const Icon = (props: IconProps) => {
	if (props.iconName === 'chevronRightBold' || props.iconName === 'arrowDownBold' || props.iconName === 'searchBold') {
		return (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={classNames(props.className && props.className)} height={props.height ? props.height : (props.width && !props.height) ? 'auto' : '1.25rem'}>
				<path fillRule="evenodd" d={iconPaths[props.iconName]} clipRule="evenodd" />
			</svg>
		)
	}
	if (props.iconName === 'arrowRight' || props.iconName === 'search' || props.iconName === 'info') {
		return (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={classNames(props.className && props.className)} height={props.height ? props.height : (props.width && !props.height) ? 'auto' : '1.25rem'}>
				<path strokeLinecap="round" strokeLinejoin="round" d={iconPaths[props.iconName]} />
			</svg>
		)
	}
	
	if (props.iconName === 'infoSolid') {
		return (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={classNames(props.className && props.className)} height={props.height ? props.height : (props.width && !props.height) ? 'auto' : '1.25rem'}>
				<path fillRule="evenodd" d={iconPaths[props.iconName]} clipRule="evenodd" />
			</svg>
		)
	}

	if (props.iconName === 'arrowRightBold') {
		return (
			<svg viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg" className={classNames(props.className && props.className)} height={props.height ? props.height : (props.width && !props.height) ? 'auto' : '1.25rem'}>
				<path d={iconPaths[props.iconName]} fill="currentColor"/>
				</svg>
		)
	}
	
	if (props.iconName === 'arrowRightSmall') {
		return (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={classNames(props.className && props.className)} height={props.height ? props.height : (props.width && !props.height) ? 'auto' : '1.25rem'}>
				<path fillRule="evenodd" d={iconPaths[props.iconName]} clipRule="evenodd" />
			</svg>
		)
	}
	
	if (props.iconName === 'arrowDown') {
		return (
			<svg xmlns="http://www.w3.org/2000/svg" className={classNames(props.className && props.className)} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" width={props.width ? props.width : (props.height && !props.width) ? 'auto' : '1.25rem'}>
				<path stroke-linecap="round" strokeLinejoin="round" d={iconPaths[props.iconName]} />
			</svg>
		)
	}


	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className={classNames(props.className && props.className)}
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			strokeWidth={2}
			height={props.height ? props.height : (props.width && !props.height) ? 'auto' : '1.25rem'}
			width={props.width ? props.width : (props.height && !props.width) ? 'auto' : '1.25rem'}
		>
			<path strokeLinecap="round" strokeLinejoin="round" d={iconPaths[props.iconName]} />
		</svg>
	);
};

export default Icon;
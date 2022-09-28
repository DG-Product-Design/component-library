import React from 'react';
import classNames from 'classnames';
import LogoLockup from './LogoLockup';

export interface LogoProps {
	className?: string;
	iconOnly?: boolean;
	white?: boolean;
}

const IconLogo = (props: LogoProps) => {
	return (
		<svg className={classNames(props.className && props.className)} width="35" height="33" viewBox="0 0 35 33" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path fillRule="evenodd" clipRule="evenodd" d="M7.564 17.82H5.153V14.981L15.825 8.716V0L0 9.086V32.984H15.825V27.068H7.564V17.82Z" fill={props.white ? '#FFFFFF' : '#EA701B'} />
			<path fillRule="evenodd" clipRule="evenodd" d="M19.104 0V8.716L29.775 14.981V17.82H27.362V27.068H19.104V32.984H34.926V9.086L19.104 0Z" fill={props.white ? '#FFFFFF' : '#EA701B'} />
		</svg>
	);
};

export const Logo = (props: LogoProps) => {
	if (props.iconOnly) return <IconLogo white={props.white} className={props.className} />
	return <LogoLockup white={props.white} className={props.className} />
};

export default Logo;




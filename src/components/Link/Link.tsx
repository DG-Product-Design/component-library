import React from 'react';
import classNames from 'classnames';
import Icon, { iconPaths } from '../Icons/Icon';

export interface MoreLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	label: string | React.ReactNode;
	leftIcon?: {
		height?: string;
		width?: string;
		iconName: keyof typeof iconPaths;
	};
	rightIcon?: {
		height?: string;
		width?: string;
		iconName: keyof typeof iconPaths;
	};
	newTab?: boolean;
}

// eslint-disable-next-line react/display-name
const Link = React.forwardRef((props: MoreLinkProps, ref) => {
	return (
		// Note: the 'noopener noreferrer' rel prop is valid, but the linter does not recognize the conditional. Suppressing unnecessary warning with line below.
		// eslint-disable-next-line react/jsx-no-target-blank
		<a
			className={classNames('flex items-center link', props.className)}
			href={props.href}
			id={props.id}
			ref={ref as React.MutableRefObject<HTMLAnchorElement>}
			rel={props.newTab ? 'noopener noreferrer' : ''}
			role="button"
			target={props.newTab ? '_blank' : '_self'}
			type={props.type}
		>
			{props.leftIcon?.iconName && (
				<Icon iconName={props.leftIcon.iconName} height={props.leftIcon.height ? props.leftIcon.height : '1rem'} width={props.leftIcon.width ? props.leftIcon.width : '1rem'} className="mr-[10px]" />
			)}

			<span>
				{props.label}
			</span>
			{props.children && props.children}

			{props.rightIcon?.iconName && (
				<Icon iconName={props.rightIcon.iconName} height={props.rightIcon.height ? props.rightIcon.height : '1rem'} width={props.rightIcon.width ? props.rightIcon.width : '1rem'} className="ml-[10px]" />
			)}
		</a>
	);
});

export default Link;
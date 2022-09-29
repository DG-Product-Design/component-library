import React from 'react';
import classNames from 'classnames';
import ButtonProps from './Button.types';
import Icon from '../Icons/Icon';
import LoadingIcon from '../Icons/LoadingIcon/LoadingIcon';


// eslint-disable-next-line react/display-name
const ButtonType = React.forwardRef((props: any & React.ButtonHTMLAttributes<HTMLButtonElement>, ref) => {
	if (props.href) return (
		// Note: the 'noopener noreferrer' rel prop is valid, but the linter does not recognize the conditional. Added a comment to suppress unnecessary warning.
		// eslint-disable-next-line react/jsx-no-target-blank
		<a
			className={classNames('no-underline hover:underline', props.className)}
			href={props.href}
			id={props.id}
			ref={ref as React.MutableRefObject<HTMLAnchorElement>}
			rel={props.newTab ? 'noopener noreferrer' : ''}
			role="button"
			target={props.newTab ? '_blank' : '_self'}
			type={props.type}
		>
			{props.children}
		</a>
	);

	return (
		<button
			className={props.className}
			disabled={props.disabled}
			id={props.id}
			onClick={props.onClick}
			ref={ref as React.MutableRefObject<HTMLButtonElement>}
			type={props.type}
		>
			{props.children}
		</button>
	);
});

function buildButtonClasses(
	variant: 'filled' | 'outline' | 'flat',
	color: 'primary' | 'secondary' | 'white',
	disabled?: boolean
) {
	const classList: Array<string> = [];

	if (variant === 'filled') {
		classList.push(classNames(!disabled && 'text-white'), 'focus:border-white active:shadow-inner');

		if (color === 'primary') {
			classList.push('border-[transparent] bg-primary hover:bg-orange-400 active:bg-orange-400');
		} else if (color === 'secondary') {
			classList.push('bg-secondary hover:bg-green-500 active:bg-green-500');
		} else classList.push('bg-white hover:bg-[rgba(255,255,255,0.8)] active:bg-[rgba(255,255,255,0.8)]');
	} else if (variant === 'outline') {
		classList.push('ripple-dark border bg-white');

		if (color === 'primary') {
			classList.push('text-primary border-primary hover:bg-orange-50 active:shadow-inner-primary');
		} else if (color === 'secondary') {
			classList.push('text-secondary border-secondary hover:bg-green-50 active:shadow-inner-secondary');
		} else classList.push('text-white border-white hover:bg-[rgba(255,255,255,0.15)] active:shadow-inner-secondary');
	} else if (variant === 'flat') {
		classList.push('ripple-dark bg-transparent border-[transparent]');

		if (color === 'primary') {
			classList.push('text-primary hover:bg-orange-50 active:shadow-inner-primary');
		} else if (color === 'secondary') {
			classList.push('text-secondary hover:bg-green-50 active:shadow-inner-secondary');
		} else classList.push('text-white hover:bg-[rgba(255,255,255,0.15)] active:shadow-inner-secondary');
	}

	return classList;
}

const Button = (props: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
	let leftIconObject = <></>;
	let rightIconObject = <></>;
	
	if (props.leftIcon?.iconName) {
		leftIconObject = <Icon iconName={props.leftIcon.iconName} height={props.href ? '1rem' : props.leftIcon.height} width={props.href ? '1rem' : props.leftIcon.width} className="mr-[10px]" />;
	}
	
	if (props.rightIcon?.iconName) {
		rightIconObject = <Icon iconName={props.rightIcon.iconName} height={props.href ? '1rem' : props.rightIcon.height} width={props.href ? '1rem' : props.rightIcon.width} className="ml-[10px]" />;
	}

	return (
		<ButtonType
			className={classNames(
				'relative justify-center border outline-none text-center ripple ease-in duration-200 rounded-l-full rounded-r-full text-base focus:shadow-[0_0_5px_2px_#0C7BE1] focus:shadow-blue-200 disabled:bg-slate-200 disabled:border-slate-200 disabled:text-slate-400 disabled:pointer-events-none py-[10px] px-8',
				(props.variant && props.color && buildButtonClasses(props.variant, props.color, props.disabled)),
				(props.className && props.className),
			)}
			disabled={props.disabled && props.disabled}
			href={props.href}
			id={props.id}
			newTab={props.newTab}
			onClick={props.onClick}
			tabIndex={props.tabIndex}
			type={props.type ? props.type : 'button'}
		>
			<div className={classNames('button-content-wrapper flex items-center justify-center', props.loading && 'button-loading-animation')}>
				{props.loading && (
					<div className="loading-content">
						<LoadingIcon
							iconColor={
								props.variant === 'filled' ? 'white' : props.color === 'primary' ? 'orange' : 'green'}
							height={36}
							width={36}
						/>
					</div>
				)}

				<div className="button-content flex items-center">
					{props.leftIcon?.iconName && (leftIconObject)}

					{props.label && (
						<span className={classNames(props.labelClass && props.labelClass)}>{props.label}</span>
					)}
					{props.children && props.children}

					{props.rightIcon?.iconName && (rightIconObject)}
				</div>
				
			</div>	
		</ButtonType>
	);
};

export default Button;
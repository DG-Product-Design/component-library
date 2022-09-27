export default interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  bold?: boolean;
  children?: any;
	className?: string;
	labelClass?: string;
  color: 'primary' | 'secondary' | 'white';
	disabled?: boolean,
  fullWidth?: boolean;
	href?: string;
	loading?: boolean;
	leftIcon?: {
		height?: string,
		width?: string,
		iconName: 'arrowDown' | 'arrowDownBold' | 'check' | 'chevronDown' | 'chevronLeft' | 'chevronRight' | 'chevronRightBold' | 'settings' | 'refresh';
	};
	rightIcon?: {
		height?: string,
		width?: string,
		iconName: 'arrowDown' | 'arrowDownBold' | 'check' | 'chevronDown' | 'chevronLeft' | 'chevronRight' | 'chevronRightBold' | 'settings' | 'refresh';
	};
  id?: string;
  label?: React.ReactNode;
  newTab?: boolean;
  noDecoration?: boolean;
	onClick?: React.MouseEventHandler<HTMLButtonElement>,
	primary?: boolean,
  tabIndex?: number;
  textReset?: boolean;
  variant?: 'filled' | 'outline' | 'flat'
}
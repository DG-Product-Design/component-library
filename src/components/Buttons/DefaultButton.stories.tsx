import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ButtonVariants, ButtonColors, ButtonTypes } from './ButtonOptions';
import ButtonProps from './Button.types';
import Button from './DefaultButton';
import { iconPaths } from '../Icons/Icon';

export default {
	component: Button,
	title: 'Components/Buttons',
	argTypes: {
		label: {
			description: 'Text displayed on the button.',
		},
		href: {
			control: 'text',
			description: 'When this prop is set, the root element changes from a `<button>` to an `<a>`.'
		},
		variant: {
			control: {
				label: 'Variants',
				type: 'radio',
			},
			description: 'Determines style of button.',
			options: ButtonVariants,
		},
		color: {
			control: 'radio',
			description: 'Determines color of button.',
			options: ButtonColors,
		},
		type: {
			control: 'radio',
			description: 'Inherent button type attribute.',
			options: ButtonTypes,
		},
		onClick: {
			control: { type: 'text' },
			description: 'Function that fires when the button\'s inherent onClick event fires.',
			action: 'onClick fired'
		},
		loading: {
			control: 'boolean',
			action: 'Button loading'
		},
		'[leftIcon | rightIcon].iconName': {
			control: 'select',
			description: 'Determines which icons (if any) are displayed to the left and/or right of the button text. Example: rightIcon={{iconName: "chevronRight"}}.  **Due to limitations with nested Types in Storybook, this demo prop will not change the rendered button. See the Icon Button below for an example.',
			options: iconPaths
		},
		'[leftIcon | rightIcon].[height | width]': {
			control: 'text',
			description: 'Specifies height or width of the left or right icon. Example: rightIcon={{iconName: "chevronRight", height: "1rem", width: "1rem"}}.  **Due to limitations with nested Types in Storybook, this demo prop will not change the rendered button. See the Link Button below for an example.',
		},
	},
} as Meta<typeof Button>;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const DefaultButton = Template.bind({});
export const IconButton = Template.bind({});

DefaultButton.args = {
	label: 'Button',
	variant: 'filled',
	color: 'primary',
	disabled: false,
	type: 'button',
	loading: false,
};

IconButton.args = {
	...DefaultButton.args,
	label: 'Button with icons',
	leftIcon: {iconName: 'refresh'},
	rightIcon: {iconName: 'chevronRight'},
};
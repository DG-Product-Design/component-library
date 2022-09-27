import React from 'react';
import { Story, Meta } from '@storybook/react';
import TextComponent from './TextInput';

const InputTypeAttributes = [
	'button',
	'checkbox',
	'color',
	'date',
	'datetime-local',
	'email',
	'file',
	'hidden',
	'image',
	'month',
	'number',
	'password',
	'radio',
	'range',
	'reset',
	'search',
	'submit',
	'tel',
	'text',
	'time',
	'url',
	'week',
]

export default {
	component: TextComponent,
	title: 'Forms/Inputs/Text Input',
	argTypes: {
		id: {
			control: 'text',
			description: 'Inherent input id attribute.'
		},
		type: {
			control: 'select',
			description: 'Inherent input type attribute',
			options: InputTypeAttributes
		},
		onBlur: {
			control: 'text',
			description: 'Use this prop to write a custom function to fire on input\'s inherent onBlur event fires (to write a custom validity function, for example). **When the \'enforcePattern\' prop is TRUE, this prop has NO EFFECT.',
			action: 'onBlur fired',
		},
		parentClass: {
			control: 'text',
			description: 'Applies classes to the element wrapping the label and input.',
		},
		labelClass: {
			control: 'text',
			description: 'Applies classes to the label only.',
		},
		inputClass: {
			description: 'Applies classes to the input only.',
			control: 'text'
		},
		value: {
			control: 'text',
			description: 'Inherent input value attribute',
			action: 'Value changed'
		},
		enforcePattern: {
			description: 'Setting this to TRUE makes the input\'s validity state dependent on satisfying the specified pattern. **When TRUE, the \'pattern\' prop is required and the \'onBlur\' prop will have NO EFFECT.'
		},
		pattern: {
			control: 'text',
			description: 'This field is required when the \'enforcePattern\' prop is set to TRUE. Accepts regex patterns.'
		},
		errorMessage: {
			control: 'text',
			description: 'Define the text displayed when input field is invalid. Error message display is controlled by satisfying the input\'s \'pattern\' prop.'
		},
	},
} as Meta;

const Template: Story<any> = (args) => <TextComponent {...args} />;

export const TextInput = Template.bind({});

TextInput.args = {
	label: 'Label Text',
	placeholder: 'Placeholder text...',
	type: 'text',
	value: 'someValue',
	enforcePattern: true,
	pattern: '[-]?[0-9]*[.,]?[0-9]+',
	errorMessage: 'User input does not match pattern',
}
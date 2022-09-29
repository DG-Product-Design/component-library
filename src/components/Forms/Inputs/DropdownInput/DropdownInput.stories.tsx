import React from 'react';
import { rest } from 'msw';
import { within, userEvent, findByRole } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { Story, Meta } from '@storybook/react';
import DropdownComponent from './DropdownInput';

export default {
	component: DropdownComponent,
	title: 'Forms/Inputs/Dropdown Input',
	decorators: [
		(Story) => (
			<div className="relative w-full flex justify-center items-start h-[248px]">
				<div className="w-full max-w-xs">
					{Story()}
				</div>
			</div>
		)
	],
	argTypes: {
		customChangeFunc: {
			description: 'Use if you want to unhook from the default onChange function which sets component\'s "selected" state to the value of the selected option.'
		},
		name: {
			description: 'The name used when using this component inside a form.'
		},
		label: {
			control: 'text',
		},
		disabled: {
			control: 'boolean',
			description: 'The inherent select element\'s disabled attribute. Defaults to FALSE.',
		},
		multiple: {
			control: 'boolean',
			description: 'Allows multiple selection when set to TRUE. Defaults to FALSE.',
		},
		error: {
			control: 'boolean',
			description: 'Controls display of error message and visual error state of dropdown. **Be sure to set the \'errorMessage\' prop when this is set to TRUE.',
		},
		errorMessage: {
			control: 'text',
			description: 'Message displayed when \'error\' prop is set to TRUE.',
		},
	}
} as Meta;

const Template: Story<any> = (args) => <DropdownComponent {...args} />;

export const DropdownInput = Template.bind({});

DropdownInput.args = {
	items: [
		'Option 1',
		'Option 2',
		'Option 3',
		'Option 4',
	],
	label: 'Label Text',
	disabled: false,
	multiple: false,
	error: false,
	errorMessage: 'Please make a selection.',
	id: 'storybookDropdown'
};


/**
 * TESTING
 */
DropdownInput.parameters = {
	msw: {
		handlers: [
			rest.get('/tasks', (req, res, ctx) => {
				return res(ctx.json(DropdownInput.args));
			}),
		],
	},
};

DropdownInput.parameters = { ...DropdownInput.parameters };
DropdownInput.play = async ({ canvasElement }) => {
	const canvas = within(canvasElement);
	const dropdownInput = await canvas.findByRole('combobox');
	
	// Click the dropdown
	await userEvent.click(dropdownInput);	
	
	// Find dropdown <ul>
	const dropdownList = await canvas.findByRole('listbox');

	const option1 = within(dropdownList).getByText('Option 1');

	await expect(option1).toBeInTheDocument();

};
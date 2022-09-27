import React from 'react';
import { Story, Meta } from '@storybook/react';
import { iconPaths } from '../Icons/Icon';
import LinkComponent, { MoreLinkProps } from './Link';

export default {
	component: LinkComponent,
	title: 'Components/Link',
	argTypes: {
		leftIcon: {
			description: 'Set an icon to appear on the left side of the anchor text. **Note: When an icon is set (left or right), the link\'s style changes such that the underline only appears on hover.'
		},
		rightIcon: {
			description: 'Set an icon to appear on the right side of the anchor text. **Note: When an icon is set (left or right), the link\'s style changes such that the underline only appears on hover.'
		},
		'[leftIcon | rightIcon].iconName': {
			control: 'select',
			description: 'Determines which icons (if any) are displayed to the left and/or right of the anchor text. Example: rightIcon={{iconName: "chevronRight"}}.  **Due to limitations with nested Types in Storybook, this demo prop will not change the rendered Link. See the Link with Icon story below for an example.',
			options: iconPaths
		},
		'[leftIcon | rightIcon].[height | width]': {
			control: 'text',
			description: 'Specifies height or width of the left or right icon. Example: rightIcon={{iconName: "chevronRight", height: "1rem", width: "1rem"}}.  **Due to limitations with nested Types in Storybook, this demo prop will not change the rendered button. See the Link with Big Icon story below for an example.',
		},
	}
} as Meta<typeof LinkComponent>;

const Template: Story<MoreLinkProps> = (args) => <LinkComponent {...args} />;

export const Link = Template.bind({});
export const LinkWithIcon = Template.bind({});
export const LinkWithBigIcon = Template.bind({});

Link.args = {
	href: 'https://capcenter.com/',
	newTab: true,
	label: 'This is a link.',
};

Link.parameters = {
	info: {
		text: 'This is info text for the link component !@#$%'
	}
};

LinkWithIcon.args = {
	...Link.args,
	label: 'This link has an icon.',
	rightIcon: {
		iconName: 'chevronRight',
	},
};

LinkWithBigIcon.args = {
	...LinkWithIcon.args,
	label: 'This link has a BIG icon.',
	rightIcon: {
		iconName: 'refresh',
		height: '2rem',
		width: '2rem',
	},
};
import React from 'react';
import classNames from 'classnames';

const ColorBlock = (props: {
	className: string,
	hex: string,
	secondaryText?: string,
	textLight?: boolean
	invisible?: boolean,
	classList?: Array<string>,
}) => {
	const color = props.className.split('-')[1];
	const number = props.className.split('-')[2];

	return (
		<div className={classNames(props.className, props.textLight ? 'text-white' : 'text-slate-600', 'h-[148px] p-3', props.invisible && 'opacity-0')}>
			<div className="flex flex-wrap w-full h-full leading-4">
				<div className='flex w-full justify-between text-base'>
					<p className="capitalize font-semibold">
						{color} {number}
					</p>
					{props.secondaryText &&
						<p className="ml-2">[{props.secondaryText}]</p>
					}
				</div>
				<ul className="w-full leading-tight text-xs">
					{props.secondaryText && (
						<React.Fragment>
							<li><code>.text-<span className="lowercase">{props.secondaryText}</span></code></li>
							<li className="mb-2"><code>.bg-<span className="lowercase">{props.secondaryText}</span></code></li>
						</React.Fragment>
					)}
					<li><code>.text-{color}-{number}</code></li>
					<li><code>.{props.className}</code></li>
				</ul>
				<p className="w-full text-right self-end uppercase">#{props.hex}</p>
			</div>
		</div>
	)
}

export default ColorBlock;
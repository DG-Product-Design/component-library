import React from 'react'
import { Listbox, Transition } from '@headlessui/react'
import Icon from '../../../Icons/Icon';
import classNames from 'classnames';

interface DropdownInputProps {
	items: Array<React.ReactElement> | Array<string>;
	label?: string;
	customChangeFunc?: React.ChangeEventHandler<HTMLAllCollection>;
	name?: string;
	disabled?: boolean;
	multiple?: boolean;
	error?: boolean;
	errorMessage?: string;
	className?: string;
}

const DropdownInput = (props: DropdownInputProps) => {
	const [selected, setSelected] = React.useState(props.multiple ? [] : undefined);

	function customOnChangeFunction(func: any) { return func };

	return (
		<div className="">
			{props.label && (
				<label className='text-sm mb-1 bold'>{props.label}</label>
			)}
			<Listbox value={selected} onChange={props.customChangeFunc ? customOnChangeFunction(props.customChangeFunc) : setSelected} name={props.name} disabled={props.disabled ? props.disabled : false} multiple={props.multiple ? props.multiple : false}>
				<div className="relative w-full">
					<Listbox.Button className={({ open }) => `${open ? 'border-blue-300 bg-white' : props.error ? 'bg-red-100 border-red-200' : 'border-slate-300 bg-white'} ${props.className && props.className} ease-in relative w-full flex items-center justify-between cursor-pointer border rounded-[2px] text-base font-base placeholder:text-slate-300 leading-6 text-left focus:shadow-[0_0_5px_0_#0C7BE1] focus:shadow-blue-200 disabled:bg-slate-200 disabled:text-slate-400 disabled:pointer-events-none disabled:outline-0 focus-visible:outline-none py-[10px] px-4`}>
						{({ open }) => (
							<React.Fragment>
								<span className="block truncate pr-2">{selected}</span>
								<Icon
									iconName={'chevronDown'}
									className={classNames('transition-transform ease-in-out stroke-[3px] text-sm text-blue-300 pointer-events-none', open ? 'rotate-180' : 'rotate-0')}
									aria-hidden="true"
								/>
							</React.Fragment>
						)}
					</Listbox.Button>

					<Transition
						as={React.Fragment}
						leave="transition ease-in duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<Listbox.Options className="absolute rounded-xl mt-1 max-h-60 w-full overflow-auto bg-white py-1 text-base shadow-base focus:outline-none">
							{props.items.map((item, index) => (
								<Listbox.Option
									key={`${item}-${index}`}
									className={({ active }) => `relative cursor-pointer select-none py-2 pl-7 pr-4 ${active ? 'bg-blue-50' : ''}`}
									value={item}
								>
									{({ selected }) => (
										<React.Fragment>
											<span className={classNames('block truncate', selected ? 'font-medium' : 'font-normal')}>
												{item}
											</span>
											{selected ? (
												<span className="absolute inset-y-0 left-0 flex items-center pl-2">
													<Icon iconName="check" className="h-4 w-4 text-blue-300" aria-hidden="true" />
												</span>
											) : null}
										</React.Fragment>
									)}
								</Listbox.Option>
							))}
						</Listbox.Options>
					</Transition>

					{props.error && (
						<p className="text-red-200 text-caption ease-in transition-transform mt-1">
							{props.errorMessage}
						</p>
					)}
				</div>
			</Listbox>
		</div>
  )
}

export default DropdownInput;